import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2487990Reducer from '../features/SignIn2487990/redux/reducers'
import SignUp2387969Reducer from '../features/SignUp2387969/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2487990: SignIn2487990Reducer,
SignUp2387969: SignUp2387969Reducer,

});