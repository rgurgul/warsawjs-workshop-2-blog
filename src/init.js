let App = {};

(function (app) {

    window.addEventListener('hashchange', function (evt) {
        let id = app.Helpers.getHash(evt.newURL);
        if (id) {
            app.viewList.hide();
            app.viewPost.show(app.postService.getPost(id));
        }
    });

})(App);