import { createForms } from "react-redux-form";
import { combineReducers, createStore } from "redux"
import { InitialContact } from "./forms";


export const ConfigureStore = () => {
  const store = createStore(combineReducers({
      ...createForms({
          contact: InitialContact
      })
  }));

  return store;
}