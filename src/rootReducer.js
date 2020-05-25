import { combineReducers } from "redux";
import productReducer from "./components/reducers/productReducer";
import cartReducer from "./components/reducers/cartReducer";
import loginReducer from "./components/reducers/loginReducer";

export default combineReducers({
    productReducer,
    cartReducer,
    loginReducer
});