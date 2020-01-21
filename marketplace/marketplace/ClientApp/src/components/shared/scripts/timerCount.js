export default function GetTimer(
  value,
  expired,
  daysT,
  hoursT,
  minutesT,
  secondsT
) {
  var countDownDate = new Date(value).getTime();
  var result = "";
  var now = new Date().getTime();
  var distance = countDownDate - now;
  if (distance >= 0) {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days <= 0) {
      result =
        hours +
        hoursT +
        "(s) " +
        minutes +
        minutesT +
        "(s) " +
        seconds +
        secondsT;
    } else {
      result =
        days +
        daysT +
        "(s) " +
        hours +
        hoursT +
        "(s) " +
        minutes +
        minutesT +
        "(s) " +
        seconds +
        secondsT;
    }
  } else {
    result = expired;
  }
  return result;
}
