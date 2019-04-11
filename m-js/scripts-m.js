/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
 /*tab content*/


     /*painkillers*/

$(document).ready(function () {
  $(".tablinks1").click(function () {
    $(".tabcontent1").show();
    $(".tablinks1").click(function () {
    $(".tabcontent1").hide();
    });
  });
});


      /*antibiotics*/
$(document).ready(function () {
  $(".tablinks2").click(function () {
    $(".tabcontent2").show();
    $(".tablinks2").click(function () {
      $(".tabcontent2").hide();
      
    });
  });
});

/*depressants*/
$(document).ready(function () {
  $(".tablinks3").click(function () {
    $(".tabcontent3").show();
    $(".tablinks3").click(function () {
      $(".tabcontent3").hide();
      $(document).event.preventDefault()
    });
  });
});

/*antimalarial*/
$(document).ready(function () {
  $(".tablinks4").click(function () {
    $(".tabcontent4").show();
    $(".tablinks4").click(function () {
      $(".tabcontent4").hide();
      $(document).event.preventDefault()
    });
  });
});


/*contraceptives*/
$(document).ready(function () {
  $(".tablinks5").click(function () {
    $(".tabcontent5").show();
    $(".tablinks5").click(function () {
      $(".tabcontent5").hide();
      $(document).event.preventDefault()
    });
  });
});


/*the flu*/
$(document).ready(function () {
  $(".tablinks6").click(function () {
    $(".tabcontent6").show();
    $(".tablinks6").click(function () {
      $(".tabcontent6").hide();
      $(document).event.preventDefault()
    });
  });
});


/*thumbs up*/

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}