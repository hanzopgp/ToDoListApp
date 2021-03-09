import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import { store } from "./store/index";

const app = createApp(App); 

app.config.globalProperties.axios = axios; 
  
app.use(store).mount("#app");       