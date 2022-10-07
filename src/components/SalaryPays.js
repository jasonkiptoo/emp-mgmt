import React from "react";
import Employee from "./Employee";

function SalaryPays({ employee, onDelete }) {
  const empName = employee.map((emp,index) => (
    <tr key={index}>
      {/* <td>{emp.id}</td> */}
      <td></td>
      <td>{emp.name}</td>
      <td>{emp.email}</td>
      <td>{emp.dept}</td>
      <td>{emp.empSalary}</td>
      <td></td>
      <td>
        <button className="btn btn-danger">Pending</button>
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
          <form
            className="ui form"
            onSubmit={(event) => {
              addEmployee(event);
            }}
          >
            <div class="form-group">
              <div class="dropdown">
                <label htmlFor="inputEmail4">Name</label>

                <select
                  type="Number"
                  name="dept"
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
                <label htmlFor="inputEmail4">Email</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="email@email.com"
                  onChange={getFieldValue}
                />
                <label htmlFor="inputEmail4">Date of Payment</label>
                <input
                  type="date"
                  name="birthDate"
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
                  name="empNumber"
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
