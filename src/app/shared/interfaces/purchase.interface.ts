export interface Purchase {
    id: string;
    customerId: string;
    purchaseAt: Date;
    quantity?: number;
    price?: number;
}