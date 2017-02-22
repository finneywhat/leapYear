// Back-end Logic

var leapYear = function(year) {
  return false;
};

$(function() {
  $("form#leap-year").submit(function() {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
