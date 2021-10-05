import { addPropertyTo, getList, fromJson, getOne, serialise,
    patchOne, deleteOne, create, fromJsonList, enumerateFiles,
    Request } from './model';
import { Dictionary } from './dictionary';
import { Address } from './address';
import { Bank } from './bank';
import { CountryTax, NoTaxEntity } from './country_tax';
import { CompanyInvitation } from './company_invitation';
import { EmailAddress } from './email_address';
import { MerchiFile } from './merchi_file';
import { PhoneNumber } from './phone_number';
import { Product } from './product';
import { ShipmentMethod } from './shipment_method';
import { UserCompany } from './user_company';

export function Company() {
    this.resource = '/companies';
    this.json = 'company';

    addPropertyTo(this, 'id');
    addPropertyTo(this, 'name');
    addPropertyTo(this, 'website');
    addPropertyTo(this, 'country');
    addPropertyTo(this, 'stripeAccountId');
    addPropertyTo(this, 'isStripeAccountEnabled');
    addPropertyTo(this, 'logo', MerchiFile);
    addPropertyTo(this, 'defaultCurrency');
    addPropertyTo(this, 'taxNumber');
    addPropertyTo(this, 'taxNumberType');
    addPropertyTo(this, 'defaultTaxType', CountryTax);
    addPropertyTo(this, 'taxTypes', CountryTax);
    addPropertyTo(this, 'paypalAccount');
    addPropertyTo(this, 'paypalPassword');
    addPropertyTo(this, 'paypalSignature');
    addPropertyTo(this, 'isPaypalValid');
    addPropertyTo(this, 'utrustApiKey');
    addPropertyTo(this, 'utrustWebhookKey');
    addPropertyTo(this, 'acceptUtrust');
    addPropertyTo(this, 'isPayingCompany');
    addPropertyTo(this, 'isUtrustValid');
    addPropertyTo(this, 'stripePublishableKey');
    addPropertyTo(this, 'stripeApiKey');
    addPropertyTo(this, 'isStripeValid');
    addPropertyTo(this, 'acceptStripe');
    addPropertyTo(this, 'acceptPaypal');
    addPropertyTo(this, 'acceptBankTransfer');
    addPropertyTo(this, 'acceptPhonePayment');
    addPropertyTo(this, 'ownershipUnconfirmed');
    addPropertyTo(this, 'userCompanies', UserCompany);
    addPropertyTo(this, 'phoneNumbers', PhoneNumber);
    addPropertyTo(this, 'paymentPhoneNumbers', PhoneNumber);
    addPropertyTo(this, 'emailAddresses', EmailAddress);
    addPropertyTo(this, 'addresses', Address);
    addPropertyTo(this, 'banks', Bank);
    /* products that a company has saved for future reference */
    addPropertyTo(this, 'savedProducts', Product);
    addPropertyTo(this, 'companyInvitations', CompanyInvitation);
    addPropertyTo(this, 'shipmentMethods', ShipmentMethod);

    this.create = function (success, error, embed, as_domain) {
        var data = serialise(this),
            self = this;
        function handleResponse(result) {
            success(fromJson(self, result[self.json]));
        }
        create({resource: this.resource,
                parameters: data[0],
                as_domain: as_domain,
                files: enumerateFiles(data[1]),
                success: handleResponse,
                error: error,
                embed: embed});
    };
    this.get = function (success, error, embed) {
        var self = this;
        function handleResponse(result) {
            success(fromJson(self, result[self.json],
                             {makesDirty: false}));
        }
        getOne({resource: this.resource,
                id: this.id(),
                success: handleResponse,
                error: error,
                embed: embed});
    };

    this.patch = function (success, error, embed) {
        var self = this,
            data = serialise(this, undefined, undefined, undefined,
                             {exlcudeOld: true})[0];
        function handleResponse(result) {
            success(fromJson(self, result[self.json],
                             {makesDirty: false}));
        }
        patchOne({resource: this.resource,
                  id: self.id(),
                  success: handleResponse,
                  error: error,
                  data: data,
                  embed: embed});
    };

   this.invite = function (companyMemberData, success, error, embed) {
        var request = new Request(),
            data = new Dictionary(),
            self = this,
            _id = self.id();

        function handleResponse(status, result) {
            var newInvitation = new CompanyInvitation(),
                invitation = JSON.parse(result),
                invitations = self.companyInvitations() ?
                  self.companyInvitations() : [];
            newInvitation.id(invitation.id);
            newInvitation.userEmail(invitation.userEmail);
            newInvitation.userName(invitation.userName);
            newInvitation.inviteAsAdmin(invitation.inviteAsAdmin);
            invitations.push(newInvitation);
            self.companyInvitations(invitations);
            success(self);
        }

        data = new Dictionary();
        data.add("inviteUserEmail", companyMemberData.emailAddress);
        data.add("inviteUserName", companyMemberData.name);
        data.add("company-id", _id);
        data.add("asAdmin", companyMemberData.isAdmin);
        request.resource('/company_invite/').method('POST');
        request.data().merge(data);
        request.responseHandler(handleResponse);
        request.errorHandler(error);
        request.send();
    }

    this.primaryEmailAddressEntity = function () {
        var emails = this.emailAddresses();
        return emails && emails[0] ? emails[0] : null;
    }

    this.primaryEmailAddress = function () {
        var email = this.primaryEmailAddressEntity();
        return email ? email.emailAddress() : null;
    };

    this.primaryPhoneNumberEntity = function () {
        var numbers = this.phoneNumbers();
        return numbers && numbers[0] ? numbers[0] : null;
    }

    this.primaryPhoneNumber = function () {
        var primary = this.primaryPhoneNumberEntity();
        return primary ? primary.internationalFormatNumber() : null;
    };

    this.primaryAddress = function () {
        if (Boolean(this.addresses()) && Boolean(this.addresses()[0])) {
            return this.addresses()[0];
        }
        return null;
    };

    this.stateAndCountryString = function () {
        var self = this;

        if (Boolean(self.primaryAddress())) {
            return self.primaryAddress().stateAndCountryString();
        }
        return 'Address not shared.';
    };

   this.primaryAddressString = function () {
       var self = this;

        if (Boolean(self.primaryAddress())) {
            return self.primaryAddress().fullAddressString();
        }
        return 'Address not shared.';
    };

    this.taxOptions = function () {
        var defaultOptions = this.defaultTaxType(),
            options = [];
        options.push(NoTaxEntity());
        if (defaultOptions) {
            options.push(defaultOptions);
        }
        return options;
    }

   this.destroy = function (success, error) {
        deleteOne(this.resource + "/" + this.id(), success, error);
    };

    this.paymentMethodIsValid = function (methodAttribute) {
        var method = this[methodAttribute]();
        return Array.isArray(method) && method.length > 0 && method[0].id();
    }

    this.arePhonePaymentsValid = function () {
        return this.paymentMethodIsValid('paymentPhoneNumbers');
    }

    this.areBankPaymentsValid = function () {
        return this.paymentMethodIsValid('banks');
    }

    this.logoUrl = function () {
        var logo = this.logo();
        return logo && logo.viewUrl() ? logo.viewUrl() : null;
    }
}

export function Companies() {
    this.resource = '/companies';
    this.json = 'companies';
    this.single = Company;

    this.get = function (success, error, parameters) {
        var self = this;
        function handleResponse(result) {
            success(fromJsonList(self, result,
                                 {makesDirty: false}));
        }
        getList(this.resource, handleResponse, error, parameters);
    };
}
