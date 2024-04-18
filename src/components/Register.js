import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SinImg from "./SinImg";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate(); //created an object for useNavigate to use for navigation
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "user",
  });
  //to store value in localStorage
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.password === input.confirmpassword) {
      // Get existing users from localStorage or initialize as an empty array
      let existingUsers = JSON.parse(localStorage.getItem("users"));
      if (!Array.isArray(existingUsers)) {
        existingUsers = [];
      }
      //checking previous email and new email matches or not
      const user = existingUsers.find((user) => user.email === input.email);
      if (user) {
        alert("Email Already Exists");
      } else {
        // Add the new user to the existing users array
        const updatedUsers = [...existingUsers, input];

        // Store the updated users array back in localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        navigate("/login");
      }
    } else {
      alert("confirm password didn't match");
    }
  };

  return (
    <>
      <div className="container mt-4 ">
        <section className="d-flex justify-content-around">
          <div className="left_data mt-5 pd-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-8">User Registration</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3 col-lg-8"
                // onChange={handleChange}
                controlId="formBasicEmail"
              >
                <Form.Label>Name </Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  value={input.name}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-8"
                // onChange={handleChange}
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
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
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
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
                  n
                  placeholder="Strong password is recommended"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-8"
                // onChange={handleChange}
                controlId="formBasicPassword"
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmpassword"
                  value={input.confirmpassword}
                  onChange={(e) =>
                    setInput({
                      ...input,
                      [e.target.name]: e.target.value,
                    })
                  }
                  n
                  placeholder="confirm your password"
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
              Already Have an Account{" "}
              <span>
                {" "}
                <NavLink to="/login">SignIn</NavLink>
              </span>
            </p>
          </div>
          <SinImg />
        </section>
      </div>
    </>
  );
};
export default Register;
