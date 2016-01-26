define(["angular"], function (angular) {
    var _routeConfig = {
        defaultRoutePath: '/',
        routes: {
            //代理渠道明细
            '/': {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main',
                dependencies: [
                    'controllers/main',
                ]
            },
            '/home' : {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home',
                dependencies: [
                    'controllers/home',
                ]
            },
            '/about' : {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about',
                dependencies: [
                    'controllers/about',
                ]
            },
            '/contact' : {
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact',
                dependencies: [
                    'controllers/contact',
                ]
            }
        }
    };


    /*
    配置路由
    @method initRoute
    @param $locationProvider
    @param $stateProvider
    @param $urlRouterProvider
    */
    function initRoute($locationProvider, $stateProvider, $urlRouterProvider) {
        var cfg = {};
        // TODO 
        // 使用html5模式下会出现异常，比如在充值界面下刷新，会根据当前url去寻找页面，即寻找payAll页面导致报错，
        // 而原版本不会有这样异常，猜测server.js做了配置的缘故，所以可能如果服务器也做了相应配置可以解决该问题
        // $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise(_routeConfig.defaultRoutePath);

        angular.forEach(_routeConfig.routes, function (cfg, state) {
            cfg.resolve = getResolve(cfg.dependencies);
            $stateProvider.state(state, cfg);
        })
    }
    /*
    获取resovle对象
    @method getResolve
    @parma {Array} dependencies 依赖项
    */
    function getResolve(dependencies) {
        return {
            resolver: function ($q, $rootScope) {
                var deferred = $q.defer();

                require(dependencies, function () {
                    $rootScope.$apply(function () {
                        deferred.resolve();
                    })
                })

                return deferred.promise;
            }
        }
    }

    return initRoute;
});