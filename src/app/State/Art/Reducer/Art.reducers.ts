import { createReducer, on } from "@ngrx/store";
import { Art } from "../../../Interface/Art";
import * as ArtAction from '../Action/Art.actions'

export interface ArtReducer{
    Arts:Art[],
    Art:Art,
    Loading:boolean
    Error:string
}

export const initialState:ArtReducer={
    Arts:[],
    Art:{
        id:'',
        artName:'',
        price:0,
        description:'',
        startingPrice:0,
        highestBidAmount:0,
        bidStartDate:new Date,
        bidEndDate:new Date,
        sellerId:'',
        
        image:'',
        category:''
    },
    Loading:false,
    Error:''

}

export const artReducer=createReducer(
    initialState,
    on(ArtAction.GetArts, (state)=>{
        return{
            ...state,
            Loading:true
        }
    }),
    on(ArtAction.GetArtsSuccess,(state,{AllArts})=>{
        return{
            ...state,
            Loading:false,
            // Arts:[...AllArts]
            Arts:AllArts
           
        }
    }),
    on(ArtAction.GetArtsFail,(state,{error})=>{
        return{
            ...state,
            Loading:false,
            error
        }
    }),
    //Get one art
    on(ArtAction.GetOneArt, (state)=>{
        return{
            ...state,
            Loading:true
        }
    }),
    on(ArtAction.GetOneArtSuccess,(state,{One_Art})=>{
        return{
            ...state,
            Loading:false,
            Art:One_Art
        }
    }),
    on(ArtAction.GetOneArtFail,(state,{error})=>{
        return{
            ...state,
            Loading:false,
            error
        }
    })
)
    