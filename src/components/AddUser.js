import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function AddUserModal({ show, handleClose }) {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "user", //yo pani save vaira xa yaslai milaunu baaki vo
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.password === input.confirmpassword) {
      // Get existing users from localStorage or initialize as an empty array
      let existingUsers = JSON.parse(localStorage.getItem("users"));
      if (!Array.isArray(existingUsers)) {
        existingUsers = [];
      }
      const user = existingUsers.find((user) => user.email === input.email);
      if (user) {
        alert("Email Already Exists");
      } else {
        // Add the new user to the existing users array
        const updatedUsers = [...existingUsers, input];
        // Store the updated users array back in localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        handleClose();
        window.location.reload(false); //page reload vaka updated table dekhajatai
      }
    } else {
      alert("confirm password didn't match");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
            <Form.Label>Password</Form.Label>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddUserModal;
