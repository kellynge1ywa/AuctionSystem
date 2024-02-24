import { createAction, props } from "@ngrx/store";
import { Category } from "../../../Interface/Category";


export const GetAllCategories=createAction('[GetAllCategories]-GetAllCategories')
export const GetCategoriesSuccess=createAction('[GetCategoriesSuccess]-GetCategoriesSuccess',props<{categories:Category[]}>())
export const GetCategoriesFail=createAction('[GetCategoriesFail]-GetCategoriesFail',props<{error:string}>())

export const GetOneCategory=createAction('[GetOneCategory]-GetOneCategory',props<{Id:string}>())
export const GetOneCategorySuccess=createAction('[GetOneCategorySuccess]-GetOneCategorySuccess',props<{Category:Category}>())
export const GetOneCategoryFail=createAction('[GetOneCategoryFail]-GetOneCategoryFail',props<{error:string}>())