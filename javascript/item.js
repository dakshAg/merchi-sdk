import generateUUID from './uuid.js';
import { addPropertyTo } from './model.js';
import { CountryTax } from './country_tax.js';

export function Item() {
    this.resource = '/items';
    this.json = 'items';
    this.temporaryId = generateUUID();

    addPropertyTo(this, 'id');
    addPropertyTo(this, 'quantity');
    addPropertyTo(this, 'taxType', CountryTax);
    addPropertyTo(this, 'taxAmount');
    addPropertyTo(this, 'cost');
    addPropertyTo(this, 'description');

    this.totalCost = function () {
        var quantity = this.quantity() ? this.quantity() : 0,
            cost = this.cost() ? this.cost() : 0;
      return quantity * cost;
    }
}
