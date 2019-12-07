import store from "./store";
import { addArticle } from "./store/actions";

declare global {
    interface Window { 
        store: typeof store,
        addArticle: typeof addArticle
     }
}

window.store = store;
window.addArticle = addArticle;