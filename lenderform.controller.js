/**
 * Created by subbaraju on 6/12/2016.
 */

(function(){
    angular
        .module("BHC")
        .controller("lenderformController",lenderformController);
    console.log("hi");

    function lenderformController() {
        var vm = this;





        function init() {
            console.log("hi");
        }

        init();


        function findlenderform(location)
        {
            $location.url("/lenderform");
        }




    }

})();
