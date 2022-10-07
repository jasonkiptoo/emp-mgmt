import React, { useEffect } from "react";
import Home from "./Home";
import AddNewEmployee from "./AddNewEmployee";
import EmployeeList from "./EmployeeList";
import NavBar from "./NavBar";
import { useState } from "react";
import SalaryPays from "./SalaryPays";
import PendingSalaries from "./PendingSalaries";
import { Routes, Route } from "react-router-dom";

function HomePage() {
  const [employee, setEmployee] = useState([]);

  const handleAdd = (employeeData) => {
    fetch("https://emp-db.herokuapp.com/users", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employeeData),
    });
  };

  function userList() {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }
  useEffect(() => {
    userList();
  }, []);
  ///code to delete an employee
  const handleDelete = async (deletedEmployee) => {
    fetch(`http://localhost:5000/users/${deletedEmployee}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedList = employee.filter((emp) => {
          return emp.id !== deletedEmployee;
        });
        setEmployee(updatedList);
      });
  };
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home empl={employee} />} />
        <Route
          exact
          path="/addnewemployee"
          element={<AddNewEmployee onSubmit={handleAdd} />}
        />
        <Route
          exact
          path="/employeelist"
          element={<EmployeeList userList={employee} onDelete={handleDelete} />}
        />
        <Route exact path="/salarypayments" element={<SalaryPays />} />
        <Route exact path="/pendingsalaries" element={<PendingSalaries />} />
      </Routes>
    </div>
  );
}
export default HomePage;
