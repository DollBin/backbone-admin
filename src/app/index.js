require(["jquery", "backbone"], function ($, Backbone) {

    var previousOpenNav = null;

    $("#JNav>li>a.dropdown-toggle").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (previousOpenNav && previousOpenNav != this) {
            $(previousOpenNav.parentNode).removeClass("open");
        }
        previousOpenNav = this;
        $(this.parentNode).addClass("open");
    });

    var Router = Backbone.Router.extend({
        routes: {
            "": "index",
            "admin": "getAdmin"
        },
        getAdmin: function () {
            require(["app/view/admin"], function (AdminView) {
                AdminView.init();
            });
        }
    });

    new Router();

    Backbone.history.start({});


});