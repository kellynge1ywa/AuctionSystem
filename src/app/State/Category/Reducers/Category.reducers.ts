import { createReducer, on } from "@ngrx/store";
import { Category, GetCategorySuccess } from "../../../Interface/Category";
import * as CategoryAction from "../../Category/Action/Category.actions"

export interface CategoryReducer{
    Categories:Category[],
    Category:Category,
    GetAllCategoriesSuccess:GetCategorySuccess,
    GetAllCategoriesFail:string,
    GetOneCategorySuccess:string,
    GetOneCategoryFail:string
}

export const initialState:CategoryReducer={
    Categories:[],
    Category:{
        categoryId:'',
        categoryName:''
    },
    GetAllCategoriesSuccess:{message:''},
    GetAllCategoriesFail:'',
    GetOneCategorySuccess:'',
    GetOneCategoryFail:''


}

export const CategoryReducer=createReducer(
    initialState,
    on(CategoryAction.GetCategoriesSuccess,(state,action):CategoryReducer=>{
        return{
            ...state,
            Categories:action.categories,
            GetAllCategoriesFail:''
        }
    }),
    on(CategoryAction.GetCategoriesFail,(state,action):CategoryReducer=>{
        return{
            ...state,
            Categories:[],
            GetAllCategoriesFail:action.error
        }
    }),

    //Get one Category
    on(CategoryAction.GetOneCategorySuccess,(state,action):CategoryReducer=>{
        return{
            ...state,
            Category:action.Category,
            GetOneCategoryFail:''
        }
    }),
    on(CategoryAction.GetOneCategoryFail,(state,action):CategoryReducer=>{
        return{
            ...state,
            GetOneCategorySuccess:'',
            GetOneCategoryFail:action.error
        }
    }),

)