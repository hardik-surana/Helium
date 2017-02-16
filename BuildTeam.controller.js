


(function(){
    angular
        .module("BHC")
        .controller("BuildTeamController",BuildTeamController);
    console.log("hi");

    function BuildTeamController() {
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

