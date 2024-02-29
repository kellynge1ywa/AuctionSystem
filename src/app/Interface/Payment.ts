export interface Payment {
    id: string;
    bidId: string;
    artName: string;
    userId: string;
    artId: string;
    amount: number;
    status: string;
    stripeSessionId: string | null;
    paymentIntent: string;
}

export interface AddPaymentDto {
    bidId: string;
}



export interface ResponseDto {
    error: string;
    result: Payment;
    success: boolean;
}

export interface StripeRequestDto {
    stripeSessionUrl: string | null;
    stripeSessionId: string | null;
    approvedUrl: string;
    cancelUrl: string;
    paymentId: string;
}