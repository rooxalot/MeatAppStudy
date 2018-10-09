export class PaymentOption {
    constructor(
        public paymentCode: string,
        public paymentName: string,
        public freightValue: number
    ) {}
};