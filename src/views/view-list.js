(function (app) {

    class ViewList extends app.ViewBase {
        constructor() {
            super();

            this.posts = app.postService.fetch();
            this.tpl = document.querySelector("#post-list-tpl");
            this.container = document.querySelector('.post-container');

            this.container.addEventListener('click', (evt) => {
                let el = evt.target;
                if (/BUTTON/.test(el.tagName) && el.className.includes('btn-remove')) {
                    app.postService.remove(el.getAttribute('data-id'));
                }
            });

            this.refresh();
        }

        refresh() {
            this.render(this.posts, this.tpl.innerHTML, this.container);
        }

        hide(){
            this.container.classList.add('hidden-sm-up');
        }
    }

    app.viewList = new ViewList();

})(App);