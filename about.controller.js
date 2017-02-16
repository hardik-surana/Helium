

(function(){
    angular
        .module("BHC")
        .controller("aboutController",aboutController);
    console.log("hi");

    function aboutController() {
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
