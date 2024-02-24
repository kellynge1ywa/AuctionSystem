import { CurrencyPipe } from "@angular/common";

export interface Art{
    id:string,
    artName:string,
    price:number,
    description:string,
    startingPrice:number,
    highestBidAmount:number,
    bidStartDate:Date,
    bidEndDate:Date,
    sellerId:string,
    
    image:string,
    category:string

}
export interface ArtResponse{
    error: string
    result: Art[]
    success: boolean

}

// export interface Result {
//     token: string
//     : User
//   }

export interface AddArt{
    artName:string,
    description: string;
    image: string;
    category:string;
    bidStartDate:Date,
    bidEndDate: Date;
    price:number
    startPrice: number;
    
}