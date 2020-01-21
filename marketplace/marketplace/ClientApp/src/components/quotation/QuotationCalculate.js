import moment from "moment";
const getDiferenceDate = function(dateDocument, dateValidity, clock) {
  var dateInitial = moment(dateDocument, "YYYY-MM-DD HH:mm:ss");
  var dateFinal = moment(dateValidity, "YYYY-MM-DD HH:mm:ss");
  var dateNow = moment();
  var timeNow = dateNow.diff(dateInitial);
  var timeLast = dateFinal.diff(dateInitial);
  var time = timeLast - timeNow;
  var secNum = time / 1000;
  secNum = secNum - clock;
  var hours = Math.floor(secNum / 3600);
  var minutes = Math.floor((secNum - hours * 3600) / 60);
  var seconds = Math.floor(secNum - hours * 3600 - minutes * 60);
  return secNum;
};
const getDiference = function(dateDocument, dateValidity) {
  var dateInitial = moment(dateDocument, "YYYY-MM-DD HH:mm:ss");
  var dateFinal = moment(dateValidity, "YYYY-MM-DD HH:mm:ss");
  return dateFinal - dateInitial;
};
const getFormat = function(hours, minutes, seconds) {
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + " horas: " + minutes + " minutos: " + seconds + " segundos";
};

module.exports = {
  getDiferenceDate,
  getFormat,
  getDiference
};
