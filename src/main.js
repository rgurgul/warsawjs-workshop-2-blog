(function (app) {

    let posts = app.PostService.fetch();

    let postListTpl = document.querySelector("#post-list-tpl").innerHTML;
    let tpl = Handlebars.compile(postListTpl)(posts);

    let container = document.querySelector('.post-container');
    container.innerHTML = tpl;
})(App);