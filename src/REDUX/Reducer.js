import { combineReducers } from "redux";

const UserReducer =(state={name:"kawish",user:[]},action)=>{

    switch(action.type)
    {
        case 'ADD_DATA':
            {
                const newArr=state.user
                newArr.push(action.payload)
                return{...state,user:newArr}

            }
        case 'DELETE_DATA':
                return {
                  ...state,
                  user: state.user.filter((i) => i.task !== action.payload)
                }    
        default:return state
    }

}

export default combineReducers({UserReducer})