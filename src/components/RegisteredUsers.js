import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import EditUserModal from "./EditUserModal"; // Import the EditUserModal component
import AddUserModal from "./AddUser";
import { useNavigate } from "react-router-dom";

function RegisteredUsers() {
  const [users, setUsers] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false); // State for controlling modal visibility
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState([]); // State for storing the user being edited
  // const [addUser, setAddUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(usersData);
  }, []);

  const handleDelete = (index) => {
    const confirm = window.confirm("Are you sure to delete this record");
    if (confirm) {
      const updatedUsers = [...users];
      updatedUsers.splice(index, 1);
      setUsers(updatedUsers);

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      console.log("user deleted", index);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user); // Set the user being edited
    console.log(editingUser);

    setShowEditModal(true); // Open the modal
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false); // Close the modal
  };

  const handleUpdateUser = (updatedUser) => {
    // Update the user data in the state
    const updatedUsers = users.map((user) =>
      user.email === updatedUser.email ? updatedUser : user
    );
    setUsers(updatedUsers);

    // Update the user data in localStorage
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Close the modal
    setShowEditModal(false);
  };

  const handleAddUser = () => {
    setShowAddUserModal(true);
  };
  const handleCloseAddUserModal = () => {
    setShowAddUserModal(false); // Close the modal
  };
  // const logoutAdmin = () => {
  //   localStorage.removeItem("adminloggedin");
  //   navigate("/login");
  // };
  const eMail = (user) => {
    const pass = user.password;
    var length = pass.length;
    return "*".repeat(length);
  };

  return (
    <>
      <div className="main-container">
        <div className="d-flex justify-content-end">
          {/* <div>List of available Users</div> */}
          <button
            onClick={handleAddUser}
            className="btn btn-primary mx-2 btn-sm"
          >
            AddUser
          </button>
          {/* <button onClick={logoutAdmin} className="btn btn-primary btn-sm">
            LogOut
          </button> */}
        </div>
        <Table striped bordered hover className="mt-2">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{eMail(user)}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleEdit(user)} // Pass the user to the handleEdit function
                    className="btn btn-primary mx-3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Render the EditUserModal component */}
      <EditUserModal
        user={editingUser} // Pass the user being edited
        show={showEditModal} // Pass the modal visibility state
        handleClose={handleCloseEditModal} // Pass the function to close the modal
        handleUpdate={handleUpdateUser} // Pass the function to update the user data
      />
      <AddUserModal
        show={showAddUserModal}
        handleClose={handleCloseAddUserModal} // Pass the function to close the modal
        // handleUpdate={handleUpdateUser}
      />
    </>
  );
}

export default RegisteredUsers;
