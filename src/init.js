const App = {};

(function (app) {

    app.views = {};
    app.services = {};
    app.models = {};
    app.controllers = {};
    app.utils = {};
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
        MSG: {
            SHOULD_IMPLEMENT: 'you should implement method '
        }
    }

})(App);