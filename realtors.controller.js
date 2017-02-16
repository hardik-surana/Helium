/**
 * Created by subbaraju on 1/12/2016.
 */



(function(){
    angular
        .module("BHC")
        .controller("realtorController",realtorController);
    console.log("hi");

    function realtorController() {
        var vm = this;


        vm.favourite=favourite;
        vm.remove=remove;
        vm.send=send;
        vm.list=[];

        function init() {

        }

        init();

        function send(message)
        {
            console.log(message);
            vm.list.push(message);
            console.log(vm.list);

        }



        vm.favourite=true;

        function favourite()
        {
            console.log(false);

            vm.favourite=false;
        }

        function remove()
        {
            console.log(true);

            vm.favourite=true;
        }


    }

})();

