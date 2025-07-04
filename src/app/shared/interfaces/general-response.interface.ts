export interface GeneralResponse<T> {
    status: number;
    code: string;
    message: string;
    data?: T;
    error?: any;
}