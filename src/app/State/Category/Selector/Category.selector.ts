import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoryReducer } from "../Reducers/Category.reducers";

export const SelectCategoryState=createFeatureSelector<CategoryReducer>('Categories');

export const GetCategories=createSelector(SelectCategoryState,(state)=>state.Categories)
export const GetOneCategory=createSelector(SelectCategoryState,(state)=>state.Category)

export const GetCategoriesSuccess=createSelector(SelectCategoryState,(state)=>state.GetAllCategoriesSuccess)
export const GetOneCategorySuccess=createSelector(SelectCategoryState,(state)=>state.GetOneCategorySuccess)

export const GetAllCategoriesFail=createSelector(SelectCategoryState,(state)=>state.GetAllCategoriesFail)
export const GetOneCategoryFail=createSelector(SelectCategoryState,(state)=>state.GetOneCategoryFail)