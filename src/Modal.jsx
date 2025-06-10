import React, { useEffect, useRef, useState } from "react";
import "./Modal.css";

function Modal({ isModalOpen, setIsModalOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleOverlayClick = () => {
    setIsModalOpen(false);
  };

  //   const changeHandler = (e) => {
  //     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //   };
  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const formDataDate = new Date(formData.dob);
    if (formDataDate.getTime() > date.getTime()) {
      alert("Invalid Date of birth. Date of birth cannot be in the future.");
    }
    if (formData.contact.length < 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else {
      setFormData({
        name: "",
        email: "",
        phone: "",
        dob: "",
      });
      setIsModalOpen(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <form onSubmit={handleSubmit}>
            <h2>Fill Details</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="name"
                id="username"
                value={formData.name}
                onChange={(e) => {
                  changeHandler(e);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={(e) => {
                  changeHandler(e);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact">Phone Number:</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={(e) => {
                  changeHandler(e);
                }}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={formData.dob}
                onChange={(e) => {
                  changeHandler(e);
                }}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
