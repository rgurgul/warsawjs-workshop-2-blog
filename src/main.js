
(function (app) {

    let viewPost = app.viewPost;
    let viewList = app.viewList;

    window.addEventListener('hashchange', function (evt) {
        let id = app.Helpers.getHash(evt.newURL);
        if (id) {
            viewList.clearContainer();
            let post = app.postsService.getPost(id);
            viewPost.show(post);
        }
    });

})(App);