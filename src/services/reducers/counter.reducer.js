import { DSC, INC } from '../constants/actionTypes';
const initialState = 0;

const incDsc = (state = initialState, action) =>{

    switch(action.type){
        case INC : {
            return state + 1 ;
            break;
        } 
        case DSC : {
            return state - 1;
            break;
        }
        default : {
            return state;
        }

    }

}

export default incDsc;