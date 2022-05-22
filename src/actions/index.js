export const saveArticles = (article) => {
    console.log(article)
    return {
        type: 'SAVE_ARTICLES',
        payload: article
    }
}