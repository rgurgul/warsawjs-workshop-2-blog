let App = {};

(function (app) {

    app.views = {};
    app.services = {};
    app.models = {};
    app.controllers = {};
    app.settings = {
        API_STRATEGY: {
            LOCAL: 'local',
            SERVER: 'server'
        },
        SERVER_END_POINT: 'http://localhost:7007/posts',
        EVENTS: {
            ADD_POST: 'add-post',
            REMOVE_POST: 'remove-post',
            ADD_COMMENT: 'add-comment',
            HASH_CHANGE: 'hashchange'
        },
        SHOULD_IMPLEMENT_MSG: 'you should implement method '
    }

})(App);