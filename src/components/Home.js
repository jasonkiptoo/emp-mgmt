import React from "react";
// import "../images/bg.png"
// const bg = new URL("./src/components/bg.png");

function Home({ empl }) {
  const number = empl.length;

  // <h3 key={emp.id}>{emp.length}</h3>));

  return (
    <>
      <div class="col-lg-2 col-md-5  col-sm-4 col-9 fontsty">
        <h4>Employees</h4>
        <h4>{number}</h4>
      </div>

      <div class="col-lg-2 col-md-5  col-sm-4 col-9 fontsty">
        <h4>Departments </h4>
        <h4>5</h4>
      </div>
      <div class="col-lg-2 col-md-5  col-sm-4 col-9 fontsty">
        <h4>Pending Payments</h4>
        <h4>105,000</h4>
      </div>

      <div class="col-lg-2 col-md-5  col-sm-4 col-9 fontsty">
        <h4>Approved Salaries</h4>
        <h4>243,000</h4>
      </div>
    </>
  );
}
export default Home;
