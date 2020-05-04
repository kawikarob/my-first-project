/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

$(".title-1").click(function () {
   $(".text-1").toggle();
});
$(".title-2").click(function () {
   $(".text-2").toggle();
});
$(".title-3").click(function () {
   $(".text-3").toggle();
});

$("#professional-reason").click(function () {
   $("#email-button").html("Email Professional Request");
});
$("#personal-reason").click(function () {
   $("#email-button").html("Email Personal Request");
});
$("#email-body").keypress(function () {
   $("#email-button").removeAttr("disabled");
});
$("#check-box").click(function () {
   $("#check-box").removeClass("is-invalid");
});
$("#email-button").click(function () {
   window.open(
      "mailto:kawikarob@gmail.com?subject=Hello&body=" + $("#email-body").val(),
      "_blank"
   );
});

// prints "hi" in the browser's dev tools console
console.log("hi");
