import { createStore } from "vuex";

import todolist from "./todolist";
import account from "./account";

export const store = createStore({
  debug: true,
  modules: {
    todolist,
    account,
  }
});
 