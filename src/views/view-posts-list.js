(function (app) {

    let ViewBase = app.views.ViewBase;

    class ViewPostsList extends ViewBase {
        constructor() {
            super();

            this.tpl = document.querySelector("#view-post-list-tpl");
            this.container = document.querySelector('.main-container');

            this.container
                .addEventListener('click', (evt) => {
                    let el = evt.target;
                    if (el.className.includes('btn-remove')) {
                        if (!confirm('are you sure?')) return;
                        document.dispatchEvent(new CustomEvent(app.settings.EVENTS.REMOVE_POST, {
                            detail: el.getAttribute('data-id')
                        }));
                    }
                });
        }

        render(data) {
            this.renderTemplate(data, this.tpl.innerHTML, this.container);
        }
    }

    app.views.ViewPostsList = ViewPostsList;

})(App);