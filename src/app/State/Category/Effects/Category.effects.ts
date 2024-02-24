import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CategoryService } from "../../../Services/category.service";
import * as CategoryAction from '../../Category/Action/Category.actions'
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()

export class CategoryEffects{
    constructor(private action$:Actions, private categoryService:CategoryService){}

    getAllCategories$=createEffect(()=>
    this.action$.pipe(
        ofType(CategoryAction.GetAllCategories),
        mergeMap(action=>this.categoryService.getAllCategories().pipe(
            map(categories=>{
                return CategoryAction.GetCategoriesSuccess({categories})
            }),
            catchError(error => of(CategoryAction.GetCategoriesFail({error})))
        )
        )
    ))
    getOneCategory$=createEffect(()=>
    this.action$.pipe(
        ofType(CategoryAction.GetOneCategory),
        mergeMap(action=> this.categoryService.getOneCategory(action.Id).pipe(
            map(Category=>{
                console.log(Category)
                return CategoryAction.GetOneCategorySuccess({Category})
            }),
            catchError(error =>of(CategoryAction.GetOneCategoryFail({error})))
        ))
    ))
}