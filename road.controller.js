(function(){
  angular
      .module("BHC")
      .controller("RoadController",RoadController);


  function RoadController($location) {
    var vm = this;

    vm.enable=enable;


    vm.list=[{
      id:0,
      heading : "Find yourself a Realtor",
      content: "In the maze of forms, financing, inspections, marketing, pricing, and negotiating, it makes sense to " +
      "work with professionals who know the community and much more. Those professionals are the local Realtors who " +
      "serve your area.",
      enable : true,
      disable:false
    },
      {
        id:1,
        heading : "Get a mortgare pre-approval",
        content: "Most first-time buyers need to finance their home purchase, and a consultation with a mortgage lender" +
        " is a crucial step in the process. Find out how much you can afford before you begin your home search.",
        enable : true,
        disable:true
      },
      {
        id:2,
        heading : "Look at homes",
        content: " There are alot of resources for you to look for homes. Educating yourself on your local market and working with an " +
        "experienced Realtor can help you narrow your priorities and make an informed decision about " +
        "which home to " +
        "choose.",
        enable : true,
        disable:true
      },
      {
        id:3,
        heading : "Choose a home",
        content: "While no one can know for sure what will happen to housing values, if you choose to buy a home that meets your needs and priorities, you’ll be happy living in it for years to come.",
        enable : true,
        disable:true
      },
      {
        id:4,
        heading : "Get funding",
        content: "The cost of financing your home purchase is usually greater than the price of the home itself (after interest, closing costs, and taxes are added). Get as much information as possible regarding your mortgage options and other costs.",
        enable : true,
        disable:true
      },
      {
        id:5,
        heading : "Make an offer",
        content: "While much attention is paid to the asking price of a home, a proposal to buy includes both the price and terms. In some cases, terms can represent thousands of dollars in additional value—or additional costs—for buyers.",
        enable : true,
        disable:true
      },
      {
        id:6,
        heading : "Get insurance",
        content: "No sensible car owner would drive without insurance, so it figures that no homeowner should be without insurance, either. Real estate insurance protects owners in the event of catastrophe. If something goes wrong, insurance can be the bargain of a lifetime.",
        enable : true,
        disable:true
      },
      {
        id:7,
        heading : "Closing",
        content: "The closing process, which in different parts of the country is also known as “settlement” or “escrow,” is increasingly computerized and automated. In practice, closings bring together a variety of parties who are part of the real estate transaction.",
        enable : true,
        disable:true
      },
      {
        id:8,
        heading : "What's next?",
        content: "You’ve done it. You’ve looked at properties, made an offer, obtained financing, and gone to closing. The home is yours. Is there any more to the home-buying process? Whether you’re a first-time buyer or a repeat buyer, you’ll want to take several more steps.",
        enable : true,
        disable:true
      }
    ];


    function enable(panelid)
    {
      console.log("hello hi");
      console.log(panelid);
      vm.list[panelid+1].enable=true;
      vm.list[panelid+1].disable=false;

    }



  }

})();

