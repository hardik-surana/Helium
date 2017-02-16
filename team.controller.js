/**
 * Created by subbaraju on 1/12/2016.
 */



(function(){
    angular
        .module("BHC")
        .controller("TeamController",TeamController);
    console.log("hi");

    function TeamController() {
        var vm = this;





        function init() {
            console.log("hi");
        }

        init();


        function findRoad(location)
        {
            $location.url("/road");
        }




    }

})();

