/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated
 with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
*/

function getGrade(s1, s2, s3) {
  let fullGrade = (s1 + s2 + s3) / 3;
  if (fullGrade <= 100 && fullGrade >= 90) {
    return "A";
  } else if (fullGrade < 90 && fullGrade >= 80) {
    return "B";
  } else if (fullGrade < 80 && fullGrade >= 70) {
    return "C";
  } else if (fullGrade < 70 && fullGrade >= 60) {
    return "D";
  } else if (fullGrade < 60 && fullGrade >= 0) {
    return "F";
  }
}
