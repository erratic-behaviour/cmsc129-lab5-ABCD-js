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
    }) + ".";

  timeElement.textContent =
    "The current time is " +
    today.toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    }) + ".";
};


function addStudent(){
  const name = document.getElementById("name").value;
  const age = Number(document.getElementById("age").value);
  const email = document.getElementById("email").value;
  const course = document.getElementById("courses").value;
  const studentNum = "2024" + Math.floor(Math.random() * 90000 + 10000);

  if (validate(name, age, email)){
    let newStudent = {
      name: name,
      studentNum: studentNum,
      age: age,
      email: email,
      course: course
  };

    students.push(newStudent);
    alert("Student added successfully!");
    
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";
    document.getElementById("courses").selectedIndex = 0;
  }
}

const students = [];

function validate(name, age, email){
  if (name.length <= 5 || !name.includes(" ")){
      alert("Invalid name!");
      return false;
  }

  if(age <= 18 || age > 99 || typeof(age) != "number"){
    alert("Invalid age!")
    return false;

  }

  if(!email.endsWith("@up.edu.ph")){
    alert("Invalid email!")
    return false;

  }
  return true;
}


function findStudent(){
  const queriedStudent = document.getElementById("searchInput").value;
  const found = students.find(n => n.studentNum === queriedStudent);
  const displayStudent = document.getElementById("studentDisplay");

  if(found){
    displayStudent.innerHTML = `Student found! <br> ${found.name} <br> ${found.age}<br>${found.email} <br> ${found.studentNum} <br> ${found.course}`;

  } else {
    displayStudent.textContent = "Student record does not exist!";
    
  }

}

function displayList(){
  const studentList = document.getElementById("studentList");
  studentList.innerHTML = ""; //clears it first

  for (let i = 0; i < students.length; i++){
    studentList.innerHTML += `${students[i].name}, ${students[i].age}, ${students[i].email}, ${students[i].studentNum}, ${students[i].course}<br>`;
  }
}


