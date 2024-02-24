import { createAction, props } from "@ngrx/store"
import { Art } from "../../../Interface/Art"

export const GetArts=createAction('[GetArts]-GetAllArts')
export const GetArtsSuccess=createAction('[GetArtsSuccess]-GetAllArtsSuccess',props<{AllArts:Art[]}>())
export const GetArtsFail=createAction('[GetArtsFail]-GetAllArtsFail',props<{error:string}>())

export const GetOneArt=createAction('[GetOneArt]-GetOneArt',props<{Id:string}>())
export const GetOneArtSuccess=createAction('[GetOneArtSuccess]-GetOneArtSuccess',props<{One_Art:Art}>())
export const GetOneArtFail=createAction('[GetOneArtFail]-GetOneArtFail',props<{error:string}>())