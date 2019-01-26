export class InvoiceItem {
    Date: Date;
    Subject: string;
    Retrieving: boolean;
    Amount: number;
    Iban?: string;
    Id: number;
}

export class NewInvoiceItem {
    Date: Date;
    Subject: string;
    Retrieving: boolean;
    Amount: number;
}
