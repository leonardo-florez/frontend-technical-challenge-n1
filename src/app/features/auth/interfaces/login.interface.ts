import { Customer } from "../../../shared/interfaces/customer.interface";

export interface Login {
    customer: Customer,
    tokenType: string,
    token: string
}