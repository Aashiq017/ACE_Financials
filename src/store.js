import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./Features/Navigation/NavigationSlice";

export default configureStore({
  reducer: {
    navigation: navigationReducer
  }
});
