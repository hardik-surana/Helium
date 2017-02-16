/**
 * Created by subbaraju on 30/11/2016.
 */


(function(){
    angular
        .module("BHC")
        .controller("HomeController",HomeController);


    function HomeController($location) {
        var vm = this;





        function init() {

        }

        init();


        function findRoad(location)
        {
            $location.url("/road");
        }




    }

})();

