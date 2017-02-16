/**
 * Created by hardik on 1/12/2016.
 */



(function(){
    angular
        .module("BHC")
        .controller("VideosController",VideosController);


    function VideosController() {

        var vm = this;




        vm.send = send;
        vm.list=[];

        function send(message) {
            console.log(message);
            vm.list.push(message);
            console.log(vm.list);


        }
    }

})();

