"use client";

import { useState } from "react";
import "./AddCustomerForm.css";

const AddCustomerForm = ({ onCustomerAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(response)

      if (!response.ok) {
        throw new Error("Failed to add customer");
      }

      const newCustomer = await response.json();
      console.log(newCustomer)

      onCustomerAdded(newCustomer);
      setFormData({
        name: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        status: "Active",
      });
    } catch (error) {
      console.error("Error adding customer:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-customer-form">
      <h3>Add New Customer</h3>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        type="text"
        name="street"
        value={formData.street}
        onChange={handleChange}
        placeholder="Street"
        required
      />
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        required
      />
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
        required
      />
      <input
        type="text"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        placeholder="ZIP"
        required
      />
      <select name="status" value={formData.status} onChange={handleChange} required>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default AddCustomerForm;
