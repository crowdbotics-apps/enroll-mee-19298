import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CopyOfSignIn2488035Reducer from '../features/CopyOfSignIn2488035/redux/reducers'
import SignIn2487990Reducer from '../features/SignIn2487990/redux/reducers'
import SignUp2387969Reducer from '../features/SignUp2387969/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CopyOfSignIn2488035: CopyOfSignIn2488035Reducer,
SignIn2487990: SignIn2487990Reducer,
SignUp2387969: SignUp2387969Reducer,

});