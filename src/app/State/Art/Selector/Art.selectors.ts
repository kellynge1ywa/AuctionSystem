import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ArtReducer } from "../Reducer/Art.reducers";

export const selectArtState=createFeatureSelector<ArtReducer>('arts');

export const SelectAllArts= createSelector(
    selectArtState,
    (state:ArtReducer) => state.Arts
)
export const SelectAllArtsLoading= createSelector(
    selectArtState,
    (state:ArtReducer) => state.Loading
)
export const SelectAllArtsError= createSelector(
    selectArtState,
    (state:ArtReducer) => state.Error
)

//select one art

export const SelectOneArt= createSelector(
    selectArtState,
    (state:ArtReducer) => state.Art
)
export const SelectOneArtLoading= createSelector(
    selectArtState,
    (state:ArtReducer) => state.Loading
)

export const SelectOneArtError= createSelector(
    selectArtState,
    (state:ArtReducer) => state.Error
)