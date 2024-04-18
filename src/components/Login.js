import { React, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SinImg from "./SinImg";
import { useNavigate, NavLink } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";

//state
const Login = () => {
  const navigate = useNavigate(); //login vaesi details page ma redirect garna lai navigate hook
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedusers = JSON.parse(localStorage.getItem("users"));
    const user = loggedusers.find(
      (user) => user.email === input.email && user.password === input.password
    );

    if (user) {
      //login successful hudai ma euta loggedin vanne bool var rakhamla that will be used to protect route with this ls key
      if (user.role === "admin") {
        localStorage.setItem("adminloggedin", true);
        localStorage.setItem("currentAdUser", JSON.stringify(user)); // Store the logged-in user object

        console.log(user); //just to see the name of logged in user
        navigate("/admin");
      } else {
        localStorage.setItem("loggedin", true);
        localStorage.setItem("currentUser", JSON.stringify(user)); // Store the logged-in user object

        console.log(user); //just to see the name of logged in user
        navigate("/");
      }
    } else {
      alert("Wrong Credentials, Please provide Correct details");

      // toast.error("login error vayo");
    }
  };

  return (
    <>
      <div className="container mx-auto ">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 pd-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-8 mt-5 pt-5">
              <u>Sign In</u>
            </h3>
            <Form onSubmit={handleLogin}>
              <Form.Group
                className="mb-3 col-lg-8"
                // onChange={handleChange}
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  // type="email"
                  // name="email"
                  // placeholder="Enter your email"

                  type="email"
                  name="email"
                  value={input.email}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-8"
                // onChange={handleChange}
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                style={{ background: "rgb(122, 28, 237)" }}
                type="submit"
                // onClick={addData}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Don't have an account, Create a new Account
              <span>
                <NavLink to="/register">Register</NavLink>
              </span>
            </p>
          </div>
          <SinImg />
        </section>
      </div>
    </>
  );
};

export default Login;
