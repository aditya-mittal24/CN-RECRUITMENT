var existing1 = $(".short1").text();
var existing2 = $(".short2").text();
var l1 = existing1.length;
var l2 = existing2.length;
var toggle1 = 0;
var toggle2 = 0;
var updated1 = existing1.substring(0, 120) + "...";
var updated2 = existing2.substring(0, 120) + "...";
$(".short1").html(updated1);
$(".short2").html(updated2);
function myFunction1() {
  if (toggle1 === 0) {
    $(".short1").html(existing1);
    toggle1 = 1;
  } else {
    $(".short1").html(updated1);
    toggle1 = 0;
  }
}
function myFunction2() {
  if (toggle2 === 0) {
    $(".short2").html(existing2);
    toggle2 = 1;
  } else {
    $(".short2").html(updated2);
    toggle2 = 0;
  }
}
