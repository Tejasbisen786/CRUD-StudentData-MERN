import React, { useEffect, useState } from "react";

function StudentCard({ student }) {
  return (
    <>
      <div className=" grid place-items-center ">
        <div className="card  border w-[300px] p-4">
          <img src={student.Profile_Photo} alt="" className=" rounded-md border h-[150px] w-[150px mx-7 " />
          <p>PRN Number: {student.PrnNumber}</p>
          <p>Name: {student.Name}</p>
          <p>Class: {student.Class}</p>
          <p>City : {student.City}</p>
          <p>Phone Number : {student.PhoneNumber}</p>
        </div>
      </div>
    </>
  );
}

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/student")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching data:", error));
    console.log(students);
  }, []);

  return (
    <>
      <div className="App mx-5 ">
        <h1 className="text-center text-2xl font-bold text-green-700 my-5">
          Student Data 
        </h1>
        <div className="card-container flex flex-row flex-wrap w-[100%] justify-center gap-2 items-center  ">
          {students.map((student) => (
            <StudentCard key={student.PrnNumber} student={student} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
