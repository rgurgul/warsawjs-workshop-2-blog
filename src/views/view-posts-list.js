(function (app) {

    const {ViewAbstract} = app.views;
    const {EventModel} = app.models;

    class ViewPostsList extends ViewAbstract {
        constructor() {
            super();
            this.container = document.querySelector('.main-container');
        }

        render(data) {
            const tpl = `
                <div class="card">
                    <h5 class="card-header">
                        POST LIST
                        <div class="float-right badge badge-success">total posts: ${data.posts.length}</div>
                    </h5>
                    <div class="card-block">
                        ${data.posts.map((item) => {
                return `
                                <div class="card mb-3">
                                    <div class="card-block">
                                        <h4>${item.title}</h4>
                                        <div>${item.description}</div>
                                        <div class="badge badge-info">total comments: ${item.comments.length}</div>
                                    </div>
                                    <div class="card-footer">
                                        <a class="btn btn-sm btn-primary"
                                           href="#${item._id}">
                                            more
                                        </a>
                                        <button class="btn btn-danger btn-sm btn-remove"
                                                data-id="${item._id}">
                                            remove
                                        </button>
                                    </div>
                                </div>`
            }).join('')}
                    </div>
                </div>`;

            this.container.innerHTML = tpl;
            this.afterRender();
        }

        afterRender() {
            this.container
                .querySelector('.card-block')
                .addEventListener('click', (evt) => {
                    const el = evt.target;
                    if (el.className.includes('btn-remove')) {
                        if (!confirm('are you sure?')) return;
                        document.dispatchEvent(EventModel.create(app.settings.EVENTS.REMOVE_POST, el.getAttribute('data-id')));
                    }
                });
        }
    }

    app.views.ViewPostsList = ViewPostsList;

})(App);