(function (app) {

    let viewPost = app.views.viewPost;
    let viewList = app.views.viewList;
    let postsService = app.services.postsService;
    let Helpers = app.Helpers;

    window.addEventListener('hashchange', function (evt) {
        let id = Helpers.getHash(evt.newURL);
        if (id) {
            viewList.clearContainer();
            let post = postsService.getPost(id);
            viewPost.show(post);
        }
    });

})(App);