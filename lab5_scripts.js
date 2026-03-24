const time_now = () => {
  // get HTML elements by ID block
  const dateElement = document.getElementById("currentDate");
  const timeElement = document.getElementById("currentTime");

  // initializes new Date object as a constant
  const today = new Date();

  // SHOW DATE block
  dateElement.textContent =
    "Today is " +
    today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) +
    ", " +
    today.toLocaleDateString("en-US", {
      weekday: "long",
    }) +
    ".";

  // SHOW TIME block
  timeElement.textContent =
    "The current time is " +
    today.toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    }) +
    ".";
};

// Ensures no duplicates
function generate_id() {
  const studentNum = "2024" + Math.floor(Math.random() * 90000 + 10000);
  if (takenIDs.includes(studentNum)) {
    return generate_id();
  }
  return studentNum;
}

function add_student() {
  // get user input from forms in HTML
  const name = document.getElementById("name").value;
  const age = Number(document.getElementById("age").value);
  const email = document.getElementById("email").value;
  const course = document.getElementById("courses").value;
  const studentNum = generate_id();


  // validate if form is filled
  if (validate(name, age, email)) {
    let newStudent = {
      name: name,
      studentNum: studentNum,
      age: age,
      email: email,
      course: course,
    };

    // appends new student into array
    students.push(newStudent);
    takenIDs.push(studentNum);
    alert("Student added successfully!");

    // resets the form input fields
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("courses").selectedIndex = 0;
  }
}

// arrays for storing students & their IDs
const students = [];
const takenIDs = [];

// function to validate the form input fields
function validate(name, age, email) {
  const regex = /^[^\s]+\s[^\s]+$/;

  // name must be at least 5 characters long
  if (!regex.test(name) || name.length <= 5) {
    alert("Invalid name!");
    return false;
  }

  // age cap: min = 18, max = 99
  if (age <= 18 || age > 99 || typeof age != "number") {
    alert("Invalid age!");
    return false;
  }

  // email must be university provided
  if (!email.endsWith("@up.edu.ph")) {
    alert("Invalid email!");
    return false;
  }

  // if all cases met, accept
  return true;
}



function find_student() {
  const queriedStudent = document.getElementById("searchInput").value;  // initialize and get input from search field
  const found = students.find((n) => n.studentNum === queriedStudent);  // if student found, proceed to display
  const displayStudent = document.getElementById("studentDisplay");

  console.log(found);

  // displays table for student data
  if (found) {
    displayStudent.innerHTML = `
    <p>Student Found!</p>
    <table>
    <tbody>
      <tr><th>Name</th>
      <td>${found.name}</td></tr>
      <tr><th>Age</th>
      <td>${found.age}</td></tr>
      <tr><th>Email</th>
      <td>${found.email}</td></tr>
      <tr><th>Student Number</th>
      <td>${found.studentNum}</td></tr>
      <tr><th>Course</th>
      <td>${found.course}</td></tr>
    </tbody>
    </table>`;
  } else {
    displayStudent.textContent = "Student record does not exist!";
  }
}

function display_list() {
  const studentList = document.getElementById("studentList");       // get table from HTML
  const tableBody = document.getElementById("directoryBody");       // get table body from HTML
  const emptyFallback = document.getElementById("emptyDirectory");  // if "database" empty

  // "database" empty
  if (students.length == 0) {
    emptyFallback.hidden = false;
  }
  
  // if "database" not empty
  else {
    emptyFallback.hidden = true;  // hide empty display
    studentList.hidden = false;   // display tables
    
    // display students on table
    tableBody.innerHTML = students
      .map(
        (student) => `
      <tr>
        <td>${student.studentNum}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.course}</td>
      </tr>
    `,
      )
      .join("");
  }
}
