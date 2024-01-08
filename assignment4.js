
const studentName = "John Doe";
const school = "High School XYZ";
const grade = "10th";
const section = "A";
const rollNumber = "12345";


const subject1 = "Math";
const subject2 = "Science";
const subject3 = "English";
const marks1 = 95;
const marks2 = 88;
const marks3 = 75;


const totalMarks = marks1 + marks2 + marks3;
const averageMarks = totalMarks / 3;


const reportCard = `
  -----------------------------------
  |         STUDENT REPORT CARD      |
  -----------------------------------
  | Name: ${studentName}              |
  | School: ${school}                |
  | Grade: ${grade}                  |
  | Section: ${section}              |
  | Roll Number: ${rollNumber}       |
  -----------------------------------
  | SUBJECT       |   MARKS          |
  -----------------------------------
  | ${subject1}      |   ${marks1}        |
  | ${subject2}      |   ${marks2}        |
  | ${subject3}      |   ${marks3}        |
  -----------------------------------
  | Total Marks: ${totalMarks}       |
  | Average Marks: ${averageMarks.toFixed(2)}   |
  -----------------------------------
`;

console.log(reportCard);
