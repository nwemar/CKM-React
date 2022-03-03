import * as actionTypes from './React_Type';

export const CurrentReactMember=(item) =>{
    return{
        type :actionTypes.Current_React_Member,
        payload:item
    }
}