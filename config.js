/**
 * Created by subbaraju on 30/11/2016.
 */
(function(){
    angular.module("BHC")
        .config(Config);

    function Config($routeProvider)
    {
        $routeProvider
            .when("/home",{
                templateUrl:"home.html",
                controller:"HomeController",
                controllerAs:"model"

            })
            .when("/road",{
                templateUrl:"road.html",
                controller:"RoadController",
                controllerAs:"model"

            })
            .when("/chat",{
                templateUrl:"chat.html",
                controller:"ChatController",
                controllerAs:"model"

            })
            .when("/BuildTeam",{
                templateUrl:"BuildTeam.html",
                controller:"BuildTeamController",
                controllerAs:"model"

            })
            .when("/team",{
                templateUrl:"team.html",
                controller:"TeamController",
                controllerAs:"model"

            })
            .when("/allrealtors",{
                templateUrl:"allrealtors.html",
                controller:"allrealtorsController",
                controllerAs:"model"

            })
            .when("/allinspectors",{
                templateUrl:"allinspectors.html",
                controller:"allinspectorsController",
                controllerAs:"model"

            })
            .when("/login",{
                templateUrl:"login.html",
                controller:"LoginController",
                controllerAs:"model"

            })
            .when("/about",{
                templateUrl:"about.html",
                controller:"aboutController",
                controllerAs:"model"

            })
            .when("/teamDetail",{
                templateUrl:"teamDetail.html",
                controller:"TeamDetailController",
                controllerAs:"model"

            })
            .when("/inspector",{
                templateUrl:"inspector.html",
                controller:"inspectorController",
                controllerAs:"model"

            })
            .when("/realtors",{
                templateUrl:"realtors.html",
                controller:"realtorController",
                controllerAs:"model"

            })
            .when("/videos",{
                templateUrl:"videos.html",
                controller:"VideosController",
                controllerAs:"model"

            })
            .when("/chatroom",{
                templateUrl:"chatroom.html",
                controller:"ChatRoomController",
                controllerAs:"model"

            })
            .when("/chatoptions",{
                templateUrl:"chatoptions.html",
                controller:"ChatOptionsController",
                controllerAs:"model"

            })
            .when("/profile",{
                templateUrl:"profile.html",
                controller:"ProfileController",
                controllerAs:"model"

            })
            .when("/favourite",{
                templateUrl:"favourite.html",
                controller:"FavouriteController",
                controllerAs:"model"

            })
            .when("/profiledata",{
                templateUrl:"profiledata.html",
                controller:"ProfileController",
                controllerAs:"model"

            })
            .when("/lenderform",{
                templateUrl:"lenderform.html",
                controller:"lenderformController",
                controllerAs:"model",

            })
            .when("/mortgage",{
                templateUrl:"mortgage.html",
                controller:"MortgageController",
                controllerAs:"model",

            })
            .when("/",{

                redirectTo:"/login"
            })
            .otherwise({
                redirectTo:"/home"
            });

    }

})();

