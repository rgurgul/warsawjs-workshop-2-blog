(function (app) {

    const {Validate} = app.utils;
    const {ViewAbstract} = app.views;
    const {EventModel} = app.models;

    class ViewPostDetails extends ViewAbstract {

        constructor() {
            super();
            this.container = document.querySelector('.main-container');
        }

        render(post) {
            const tpl = `
                    <div class="card mb-3">
                        <div class="card-block">
                            <button class="btn btn-primary btn-sm btn-back">
                                back
                            </button>
                            <hr>
                            <h4>${post.title}</h4>
                            <div>${post.description}</div>
                        </div>
                    </div>
                    <div class="card card-block">
                        <h5 class="card-title">comments</h5>
                        <ul>
                            ${post.comments.map(({msg}) => {
                                return `<li>${msg}</li>`
                            }).join('')}
                        </ul>
                        <form name="add-comment-form" novalidate>
                            <div class="form-group">
                                <textarea class="form-control new-comment"
                                          required
                                          name="msg"
                                          placeholder="add comment"></textarea>
                            </div>
                            <button type="button"
                                    class="btn btn-success btn-sm btn-add-comment">
                                add comment
                            </button>
                        </form>
                    </div>`;

            this.container.innerHTML = tpl;
            this.afterRender(post);
        }

        afterRender(post){
            const btnBack = this.container.querySelector('.btn-back'),
                form = document.forms['add-comment-form'],
                validator = new Validate(form);

            form
                .querySelector('.btn-add-comment')
                .addEventListener('click', () => {
                    validator.checkForm((data) => {
                        this.addComment(post, data);
                    });
                });

            btnBack.addEventListener('click', () => {
                location.href = '/';
            });
        }

        addComment(post, comment) {
            document.dispatchEvent(EventModel.create(app.settings.EVENTS.ADD_COMMENT, {post, comment}));
        }
    }

    app.views.ViewPostDetails = ViewPostDetails;

})(App);