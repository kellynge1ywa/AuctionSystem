import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ArtService } from "../../../Services/art.service";
import * as artAction from  '../Action/Art.actions'
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()

export class ArtEffects{

    constructor(private action$:Actions, private artService:ArtService){}

    GetAllArts$=createEffect(()=>this.action$.pipe(
        ofType(artAction.GetArts),
        mergeMap(()=>this.artService.getAllArts().pipe(
            map(AllArts =>artAction.GetArtsSuccess({AllArts})),
            catchError(error => of(artAction.GetArtsFail({error})))

        )),
    ));
    GetOneArts$=createEffect(()=>this.action$.pipe(
        ofType(artAction.GetOneArt),
        mergeMap((action)=>this.artService.getOneArt(action.Id).pipe(
            map(One_Art =>artAction.GetOneArtSuccess({One_Art})),
            catchError(error => of(artAction.GetOneArtFail({error})))

        ))
    ))

}