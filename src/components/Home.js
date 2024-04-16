// import React, { useEffect, useState } from "react";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import { useNavigate } from "react-router-dom";

// const Details = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const storedData = localStorage.getItem("userData");
//     if (storedData) {
//       setData(JSON.parse(storedData));
//     }
//   }, []);

//   const history = useNavigate();

//   const userLogout = () => {
//     localStorage.removeItem("userData");
//     history("/");
//   };

//   return (
//     <>
//       {data.length === 0 ? (
//         "errror"
//       ) : (
//         <>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               height: "100vh",
//             }}
//           >
//             <div>
//               <h2>Stored Details</h2>
//               <Table striped bordered hover variant="dark">
//                 <thead>
//                   <tr>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Password</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {/* data anusaar table ghatbadh hotai  */}
//                   {data.map((item, index) => (
//                     <tr key={index}>
//                       <td>{item.name}</td>
//                       <td>{item.email}</td>

//                       <td>{item.password}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </div>
//             <Button
//               variant="primary"
//               className="col-lg-6"
//               style={{ background: "rgb(122, 28, 237)" }}
//               type="logout"
//               onClick={userLogout}
//             >
//               LogOut
//             </Button>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Details;

import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const userName = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };
  return (
    <>
      <div>Welcome on Home page, {userName.name}</div>
      {/* <div>Welcome on Home page, Mr. </div> */}
      <Button
        variant="primary"
        className="col-lg-6"
        style={{ background: "rgb(122, 28, 237)" }}
        type="button"
        onClick={handleLogout}
      >
        LogOut
      </Button>
    </>
  );
};

export default Home;
