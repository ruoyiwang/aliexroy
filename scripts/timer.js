function timeDifference(laterdate,earlierdate) {
  var earlier = moment(earlierdate);
  var later = moment(laterdate);
  var duration = {};

  var numYears = later.diff(earlier, "years");
  earlier.add(numYears, "years");

  var difference = later.toDate().getTime() - earlier.toDate().getTime();

  var daysDifference = Math.floor(difference/1000/60/60/24);
  difference -= daysDifference*1000*60*60*24;

  var hoursDifference = Math.floor(difference/1000/60/60);
  difference -= hoursDifference*1000*60*60;

  var minutesDifference = Math.floor(difference/1000/60);
  difference -= minutesDifference*1000*60;

  var secondsDifference = Math.floor(difference/1000);


  if (hoursDifference < 10)
    hoursDifference = "0" + hoursDifference;
  if (minutesDifference < 10)
    minutesDifference = "0" + minutesDifference;
  if (secondsDifference < 10)
    secondsDifference = "0" + secondsDifference;

  duration.years = numYears;
  duration.days = daysDifference;
  duration.hours = hoursDifference;
  duration.minutes = minutesDifference;
  duration.seconds = secondsDifference;
  // alert(minutesDifference+":"+secondsDifference);
  return duration;
  // console.log('difference = ' + daysDifference + ' day/s ' + hoursDifference + ' hour/s ' + minutesDifference + ' minute/s ' + secondsDifference + ' second/s ');
}

var laterdate = new Date();     // now
var earlierdate = new Date("January 30, 2015 21:00:00");

var initDuration = timeDifference(laterdate, earlierdate);
$("#years").text(initDuration.years);
$("#days").text(initDuration.days);
$("#hours").text(initDuration.hours);
$("#minutes").text(initDuration.minutes);
$("#seconds").text(initDuration.seconds);

setInterval (function(){

  laterdate = new Date();
  duration = timeDifference(laterdate,earlierdate);

  if (duration.seconds == 0){
    $("#minutes").fadeOut(function() {
      $(this).text(duration.minutes).fadeIn();
    });
    if (duration.minutes == 0){
      $("#hours").fadeOut(function() {
        $(this).text(duration.hours).fadeIn();
      });
      if (duration.hours == 0){
        $("#days").fadeOut(function() {
          $(this).text(duration.days).fadeIn();
        });
        if (duration.days ==0) {
          $("#years").fadeOut(function() {
            $(this).text(duration.years).fadeIn();
          });
        }
      }
    }
  }


  $("#seconds").fadeOut(function() {
    $(this).text(duration.seconds).fadeIn();
  });

}, 1000);
