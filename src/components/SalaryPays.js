import { Toast } from "bootstrap";
import React, { useState } from "react";
import Employee from "./Employee";

function SalaryPays({ employee, onDelete }) {
  const [state, setState] = useState([]);

  const { name, email, dept, payDate, empNumber, accNumber } = state;

  const handleApprove = (id) => {
    console.log("clikk", id);
    // const singleUser=employee.find((emp)=>emp.id==id)
    // setState
  };

  const onSubmitApprove = (event) => {
    event.preventDefault();
    if (!email) {
      window.alert("Fill out all fields");
    }
  };

  const empName = employee.map((emp, index) => (
    <tr key={index}>
      {/* <td>{emp.id}</td> */}
      <td></td>
      <td>{emp.name}</td>
      <td>{emp.email}</td>
      <td>{emp.dept}</td>
      <td>{emp.empSalary}</td>
      <td></td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleApprove(emp.id);
          }}
        >
          Pending
        </button>
      </td>
    </tr>
  ));
  const getFieldValue = () => {};
  const addEmployee = () => {};
  return (
    <div class="container">
      <div class="salaryTable">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Dept</th>
              <th>Basic Salary</th>
              <th>Account N.o</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{empName}</tbody>
        </table>
      </div>

      <span class="border">
        <div className="d-flex p-2">
          <form className="ui form" onSubmit={onSubmitApprove}>
            <div class="form-group">
              <div class="dropdown">
                <h4>Name</h4>
                <select
                  type="Number"
                  name="name"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="employee n.o"
                  onChange={getFieldValue}
                >
                  <option value="Select Employee"> Select Employee⬇️ </option>
                  {employee.map((empName) => (
                    <option value={empName.name}>{empName.name}</option>
                  ))}
                </select>
                <h4>Email</h4>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="email@email.com"
                  onChange={getFieldValue}
                />
                <h4>Date</h4>
                <input
                  type="date"
                  name="payDate"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Date"
                  onChange={getFieldValue}
                />
                <label htmlFor="inputEmail4">Employee Number</label>
                <input
                  type="Number"
                  name="empNumber"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="employee n.o"
                  onChange={getFieldValue}
                />
                <label htmlFor="inputEmail4">Account N.o</label>
                <input
                  type="Number"
                  name="accNumber"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="acc n.o"
                  onChange={getFieldValue}
                />

                <button type="submit" className="btn btn-info">
                  Authorize Payment
                </button>
              </div>
            </div>
          </form>
        </div>
      </span>
    </div>
  );
}
export default SalaryPays;
