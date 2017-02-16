/**
 * Created by subhammittal on 3/12/2016.
 */
/**
 * Created by subbaraju on 1/12/2016.
 */



(function(){
    angular
        .module("BHC")
        .controller("ProfileController",ProfileController);
    console.log("hi");

    function ProfileController() {
        var vm = this;


        vm.send=send;

        function init() {

        }

        init();

        vm.list=[];

        function send(message)
        {
            console.log(message);
            vm.list.push(message);
            console.log(vm.list);
            vm.message = true;
            console.log(vm.message);

        }



    }

})();

