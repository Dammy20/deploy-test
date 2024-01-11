import { combineReducers } from "redux";
import CategorySlice from "../slices/CategorySlice";


const rootReducer = combineReducers({
    category: CategorySlice,
    // approvedProduct: approvedSlice

});

export default rootReducer;