"use strict";

/**
 *
 * @file: dateTimeClass.js
 * @author: Ian Neal Higginson
 * @version: 1.0.0.13/11/2022.1200
 *
 */

/* #region DateTimeClass */

class DateTimeClass {
 /* #region constructor */

 constructor(long, short) {
  this.long = long;
  this.short = short;
 }

 /* #endregion constructor */

 /* #region BuildTheDate */

 BuildTheDate(requested) {
  this.request = requested;

  const _d = new Date();

  let date = _d.getDate();
  let day = _d.getDay();
  let month = _d.getMonth();
  let year = _d.getFullYear();

  let hrs = _d.getHours();
  let mins = _d.getMinutes();
  let secs = _d.getSeconds();


  let dayNames = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
  ];

  let monthNames = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
  ];

  let nthDate = "";
  switch (parseInt(date)) {
   case 1:
   case 21:
   case 31:
    nthDate = date + "st";
    break;
   case 2:
   case 22:
    nthDate = date + "nd";
    break;
   case 3:
   case 23:
    nthDate = date + "rd";
    break;
   default:
    nthDate = date + "th";
    break;
  }

  /**
   *! Making nthDate a two numerical, two alpha output (00th)
   */
  nthDate = date < 10 ? "0" + nthDate : nthDate;

  let out = "";

  switch (this.request) {
   case "long":
    out = `${dayNames[day]}, ${nthDate} ${monthNames[month]}, ${year}.`;
    break;
   case "short":
    date = date < 10 ? `0${date}` : date;
    month = month < 10 ? `0${month}` : month;
    out = `${date}/${month}/${year}.`;
    break;
   case "time":
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;
    out = `${hrs}:${mins}:${secs}`;
    break;
   case "":
    out = `Improper request!`;
    break;
  }
  return out;
 }

 /* #endregion BuildTheDate */

 /* #region longDate */

 longDate() {
  let data = this.BuildTheDate("long");
  return data;
 }

 /* #endregion longDate */

 /* #region shortDate */

 shortDate() {
  let data = this.BuildTheDate("short");
  return data;
 }

 /* #endregion shortDate */

 /* #region The Time */

 theTime() {
  let data = this.BuildTheDate("time");
  return data;
 }

 /* #endregion The Time */

 //
}

/**
 ** Calling the class BuildTheDate
 */

// let longRequest = new DateTimeClass();
// let longAnswer = longRequest.longDate();
// console.log(`This is the long answer: ${longAnswer}`);

// let shortRequest = new DateTimeClass();
// let shortAnswer = shortRequest.shortDate();
// console.log(`This is the short answer: ${shortAnswer}`);

/* #endregion Tests */

module.exports = DateTimeClass;
