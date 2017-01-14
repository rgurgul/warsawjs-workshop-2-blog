(function (app) {

    class ViewList extends app.views.ViewBase {
        constructor() {
            super();

            //this.posts = app.services.postsService.fetch();
            this.tpl = document.querySelector("#post-list-tpl");
            this.container = document.querySelector('.post-container');

            this.container.addEventListener('click', (evt) => {
                let el = evt.target;
                if (/BUTTON/.test(el.tagName) && el.className.includes('btn-remove')) {
                    document.dispatchEvent(new CustomEvent("remove-post", {
                        detail: el.getAttribute('data-id')
                    }));
                }
            });

            //this.refresh();
        }

        refresh(data) {
            this.render(data, this.tpl.innerHTML, this.container);
        }

        clearContainer() {
            this.container.innerHTML = '';
        }
    }

    app.views.ViewList = ViewList;

})(App);