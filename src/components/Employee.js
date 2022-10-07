import React from "react";

function Employee({ employee ,onDelete}) {
  const { id, name, email, birthDate, dept, image, empTerms } = employee;

  const handleDelete=()=>{
    onDelete(id);
  }
  return (
    <tr key={id}>
      <td></td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{birthDate}</td>
      <td>{dept}</td>
      <td>{empTerms}</td>

      <td>
        <img src={image} width="50px" />
      </td>
      <td>
        <button className="btn btn-success" >Edit</button>|
        <button
          className="btn btn-danger"
          onClick={() => {
            if (window.confirm("Are you sure you wish to delete this item?"))
              handleDelete(); 
          }}
        >
          Delete
        </button>
           </td>
    </tr>)
}
export default Employee;
