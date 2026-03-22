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
    });

  timeElement.textContent =
    "The current time is " +
    today.toLocaleTimeString("en-us", {
      hour: "2-digit",
      minute: "2-digit",
    });
};

  const student = {
    studentNumber: 2024 + Math.floor(Math.random() * 90000 + 10000),
    name: "grwwrh", 
    age: 19,
    email: "gjsreipgej@gmailcom",
    course: "BS Computer Repair Shop"
}


function addStudent(){
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;
  const studentNum = "2024" + Math.floor(Math.random() * 90000 + 10000);

  if (validate(name, age, email)){
    let newStudent = {
      name: name,
      studentNum: studentNum,
      age: age,
      email: email,
      course: course
  }

    students.push(newStudent)
  }


}

const students = []

function validate(name, age, email){
  if (name.length <= 5 || !name.includes(" ")){
      console.log("Invalid name!");
      return false;
  }

  if(age <= 18 || age > 99 || typeof(age) != "number"){
    console.log("Invalid age!")
    return false;

  }

  if(!email.endsWith("@up.edu.ph")){
    console.log("Invalid email!")
    return false;

  }
  return true

}

function findStudent(){
  let queriedStudent = document.getElementById()
}


