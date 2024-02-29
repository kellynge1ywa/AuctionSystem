export interface Bid {
    id: string;
    bidAmount: number;
    artName:string,
    highestBidAmount: number;
    bidEndDate: string;
    status: string;
    bidderId: string;
    artId: string;
}
export interface AddBidDto {
    bidAmount: number;
}
export interface ResponseDto {
    error: string;
    result: Bid;
    success: boolean;
}