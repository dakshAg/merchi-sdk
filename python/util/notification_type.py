NO_TYPE = 0  # System
DRAFT_SENT = 1  # User
DRAFT_CHANGE_REQUEST = 2  # User
DRAFT_APPROVED = 3  # User
DESIGNER_ASSIGNED = 4  # Domain
DESIGNER_CHANGED = 5  # Domain
DRAFT_COMMENT = 6  # User
JOB_PAID = 7  # User / Domain
INVOICE_PAID = 8  # User / Domain
PAYMENT_ACCEPTED = 9  # User / Domain
SEND_INVOICE = 10  # Domain
JOB_COMMENT = 11  # User
PRODUCTION_COMMENT = 12  # User
JOB_STALE = 13  # Domain
MANAGER_ASSIGNED = 14  # Domain
ORDER_RECEIVED = 15  # Domain
CLIENT_CHANGED = 16  # Domain
PRODUCTION_FILE_UPLOADED = 17  # User
PRODUCTION_CANCELLED = 18  # Domain
PRODUCTION_FINISHED = 19  # User
PRODUCTION_COMMENCED = 20  # User
QUOTE_APPROVED = 21  # User When quote has been approved by manager
QUOTE_REFUSED = 22  # User
QUOTE_SUBMITTED = 23  # User
QUOTE_FAILED = 24  # Domain
QUOTE_COMMENCED = 25  # Domain
QUOTE_EXPIRED = 26  # Domain
SUPPLIER_ASSIGNED = 27  # Domain
SUPPLIER_REFUSED = 28  # User
READY_FOR_SHIPPING = 29  # Domain
SHIPMENT_UPDATE = 30  # User
SIGN_UP_CONFIRMATION = 31  # Domain / System
AUTOMATIC_JOB_RESPONSE = 32  # User / Domain
CRASH_EVENT = 33  # System
MANAGER_SUMMARY = 34  # System
PASSWORD_RESET = 35  # System
MANAGER_REASSIGNED = 36  # Domain
EMAIL_RESPONSE = 37  # Domain / System
JOB_NOTIFICATION = 38  # User / Domain
JOB_REMINDER = 39  # User / Domain
GENERAL_REMINDER = 40  # User / Domain
INVOICE_EMAIL_RESPONSE = 41  # User / Domain
AUTOMATIC_INVOICE_RESPONSE = 42  # User / Domain
SHIPMENT_DISPATCH_CLOSE = 43  # Domain / User
SHIPMENT_NOT_DISPATCHED = 44  # Domain / User
SHIPMENT_EXPECTED_DATE_WARNING = 45  # Domain / User
JOB_ADDED_TO_SHIPMENT = 46  # User / Domain
JOB_REMOVED_FROM_SHIPMENT = 47  # User / Domain
ASSIGNMENT_REMOVED_FROM_SHIPMENT = 48  # User / Domain
ASSIGNMENT_ADDED_TO_SHIPMENT = 49  # User / Domain
SHIPMENT_EXPECTED_DATE_PAST = 50  # Domain / User
JOB_FILE_UPLOADED = 51  # User
DOMAIN_INVITATION = 52  # Domain
QUOTE_JOB_SUBMITTED = 53  # User
QUOTE_JOB_RECEIVED = 54  # User
QUOTE_JOB_UPDATED = 55  # User
QUOTE_JOB_UPDATED_SENT = 56  # User
QUOTE_JOB_APPROVED = 57  # User
QUOTE_JOB_APPROVED_SENT = 58  # User
JOB_NOTIFICATION_COMMENT = 59  # User
PRODUCTION_SHIPPED = 60  # User
SELLER_STORE_CREATED = 61  # System
WEB_FORM = 62  # System

SHOW_USER_AVATAR = \
    [DRAFT_SENT, DRAFT_CHANGE_REQUEST, DRAFT_APPROVED,
     DRAFT_COMMENT, JOB_COMMENT, PRODUCTION_COMMENT,
     PRODUCTION_FILE_UPLOADED, PRODUCTION_FINISHED, PRODUCTION_SHIPPED,
     PRODUCTION_COMMENCED, QUOTE_APPROVED, SHIPMENT_UPDATE,
     JOB_FILE_UPLOADED, QUOTE_JOB_SUBMITTED, QUOTE_JOB_RECEIVED,
     QUOTE_JOB_UPDATED, QUOTE_JOB_UPDATED_SENT,
     QUOTE_JOB_APPROVED, QUOTE_JOB_APPROVED_SENT,
     JOB_NOTIFICATION_COMMENT]

SHOW_DOMAIN_AVATAR = \
    [NO_TYPE, DESIGNER_ASSIGNED, DESIGNER_CHANGED,
     SEND_INVOICE, JOB_STALE, MANAGER_ASSIGNED, ORDER_RECEIVED,
     CLIENT_CHANGED, PRODUCTION_CANCELLED, QUOTE_FAILED,
     QUOTE_COMMENCED, QUOTE_EXPIRED, SUPPLIER_ASSIGNED,
     READY_FOR_SHIPPING, SIGN_UP_CONFIRMATION, CRASH_EVENT,
     MANAGER_SUMMARY, PASSWORD_RESET, MANAGER_REASSIGNED,
     EMAIL_RESPONSE, SHIPMENT_EXPECTED_DATE_PAST, DOMAIN_INVITATION,
     SELLER_STORE_CREATED, WEB_FORM]

SHOW_USER_OR_DOMAIN_AVATAR = \
    [JOB_PAID, INVOICE_PAID, PAYMENT_ACCEPTED,
     AUTOMATIC_JOB_RESPONSE, JOB_NOTIFICATION,
     JOB_REMINDER, GENERAL_REMINDER,
     INVOICE_EMAIL_RESPONSE, AUTOMATIC_INVOICE_RESPONSE,
     JOB_ADDED_TO_SHIPMENT, JOB_REMOVED_FROM_SHIPMENT,
     ASSIGNMENT_REMOVED_FROM_SHIPMENT,
     SHIPMENT_EXPECTED_DATE_PAST,
     ASSIGNMENT_ADDED_TO_SHIPMENT]

SHOW_DOMAIN_OR_USER_AVATAR = \
    [SHIPMENT_DISPATCH_CLOSE, SHIPMENT_NOT_DISPATCHED,
     SHIPMENT_EXPECTED_DATE_WARNING, SHIPMENT_EXPECTED_DATE_PAST]
