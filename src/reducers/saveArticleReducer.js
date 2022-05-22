const initialState = {
    articles: []
}


export default function saveArticles(state = initialState, action) {
    switch (action.type) {
        case 'SAVE_ARTICLES':
            console.log(action)
            return {
                ...state,
                articles: action.payload
            };
        default:
            return state;
    }
}


