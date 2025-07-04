export interface Purchase {
    id: string;
    customerId: string;
    purchasedAt: Date;
    quantity?: number;
    price?: number;
}