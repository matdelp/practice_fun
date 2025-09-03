/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
s= "12:01:00PM"
Return '12:01:00'.
s= "12:01:00AM"
Return '00:01:00'.

Function Description
Complete the timeConversion function. It should return a new string representing the input time in 24 hour format.
Input: string s: a time in 12 hour format
Output: string of time in 24 hour format
*/

import { log } from "console";

const timeConversion = (s: string): string => {
  if (s.length < 1) return "invalid input";
  const hour = Number(s.split(":")[0]);

  if (s.endsWith("PM")) {
    if (hour === 12) return s.split("PM")[0];
    if (hour >= 10) return s.split("PM")[0].replace(`${hour}`, `${hour + 12}`);
    return s.split("PM")[0].replace(`0${hour}`, `${hour + 12}`);
  }
  if (hour === 12) {
    return s.split("AM")[0].replace(`${hour}`, `00`);
  }
  return s.split("AM")[0];
};

log(timeConversion("01:12:00PM")); //"12:12:00"
log(timeConversion("12:01:00PM")); //"12:01:00"
log(timeConversion("12:01:00AM")); //"00:01:00"
