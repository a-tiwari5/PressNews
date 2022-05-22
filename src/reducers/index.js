import { combineReducers } from 'redux';
import saveArticles from "./saveArticleReducer"

export default combineReducers({
    data: saveArticles
});