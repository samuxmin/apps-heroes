import { types } from "../types/types";

// const state = {
//     name:'Samuel',
//     logged:false
// }

export const authReducer = (state = {}, action) => {
   
    switch (action.type) {
        case types.login:
            return{
                ...action.payload, 
                logged:true
            }
        case types.logout:
            return{
                logged:false
            }

        default:
            return state;
    }
}
