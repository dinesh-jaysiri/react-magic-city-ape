import { createAction } from "@reduxjs/toolkit";

export const accountLoadBegan = createAction("account/LoadBegan");

export const accountLoadSuccess = createAction("account/LoadSuccess");

export const accountLoadFailed = createAction("account/LoadFailed");


export const providerLoadBegan = createAction("provider/LoadBegan");

export const providerLoadSuccess = createAction("provider/LoadSuccess");

export const providerLoadFailed = createAction("provider/LoadFailed");



export const dataLoadBegan = createAction("data/LoadBegan");

export const dataLoadSuccess = createAction("data/LoadSuccess");

export const dataLoadFailed = createAction("data/LoadFailed");





