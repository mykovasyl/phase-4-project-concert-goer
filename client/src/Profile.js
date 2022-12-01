import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

function Profile({ currentUser, setCurrentUser }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: currentUser.name,
    city: currentUser.city,
    state: currentUser.state,
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleEdit() {
    setEditing(!editing);
  }

  function handleDelete() {
    fetch(`/users/${currentUser.id}`, {
      method: "DELETE",
    });
    setCurrentUser(null);
    navigate("/");
  }

  function handleUpdate() {
    setEditing(!editing);
    fetch(`/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        setFormData({ ...formData, updatedUser });
      });
  }

  function tableDataOrInputs() {
    if (!editing) {
      return (
        <>
          <td>{currentUser.name}</td>
          <td>{currentUser.city}</td>
          <td>{currentUser.state}</td>
          <td>
            <Button variant="warning" onClick={handleEdit}>
              <FaEdit />
            </Button>
            <Button variant="danger">
              <FaTrashAlt onClick={handleDelete} />
            </Button>
          </td>
        </>
      );
    } else {
      return (
        <>
          <td>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            ></Form.Control>
          </td>
          <td>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            ></Form.Control>
          </td>
          <td>
            <Form.Control
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            ></Form.Control>
          </td>
          <td>
            <Button variant="success" onClick={handleUpdate}>
              <FaCheck />
            </Button>
          </td>
        </>
      );
    }
  }

  return (
    <div>
      <h3>Profile</h3>
      {tableDataOrInputs()}
    </div>
  );
}

export default Profile;
