const time_now = () => {
  const dateElement = document.getElementById("currentDate");
  const timeElement = document.getElementById("currentTime");

  const today = new Date();

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
  const name = document.getElementById("name").value;
  const age = Number(document.getElementById("age").value);
  const email = document.getElementById("email").value;
  const course = document.getElementById("courses").value;
  const studentNum = generate_id();

  if (validate(name, age, email)) {
    let newStudent = {
      name: name,
      studentNum: studentNum,
      age: age,
      email: email,
      course: course,
    };

    students.push(newStudent);
    takenIDs.push(studentNum);
    alert("Student added successfully!");

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("courses").selectedIndex = 0;
  }
}

const students = [];
const takenIDs = [];

function validate(name, age, email) {
  const regex = /^[^\s]+\s[^\s]+$/;

  if (!regex.test(name) || name.length <= 5) {
    alert("Invalid name!");
    return false;
  }

  if (age <= 18 || age > 99 || typeof age != "number") {
    alert("Invalid age!");
    return false;
  }

  if (!email.endsWith("@up.edu.ph")) {
    alert("Invalid email!");
    return false;
  }
  return true;
}

function find_student() {
  const queriedStudent = document.getElementById("searchInput").value;
  const found = students.find((n) => n.studentNum === queriedStudent);
  const displayStudent = document.getElementById("studentDisplay");

  console.log(found);

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
  const studentList = document.getElementById("studentList");
  const tableBody = document.getElementById("directoryBody");
  const emptyFallback = document.getElementById("emptyDirectory");

  if (students.length == 0) {
    emptyFallback.hidden = false;
  } else {
    emptyFallback.hidden = true;
    studentList.hidden = false;
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
