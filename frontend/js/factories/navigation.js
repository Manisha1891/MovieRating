myApp.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Home",
        classis: "active",
        anchor: "home",
    }];

    return {
        getNavigation: function () {
            return navigation;
        },
        callApiMovies: function (url, data, callback) {
            $http.post(adminurl + url, data).then(function (data) {
                callback(data);
            });
        }
    };
});