"use client";

import { useState, useEffect } from "react";
import "./CustomerTable.css";

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [editCustomerId, setEditCustomerId] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10); 

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch(`https://company-wisdom-e17ny4wr0-sreejithsree30s-projects.vercel.app/api/customers?page=${currentPage}&size=${pageSize}`);
        if (!response.ok) {
          throw new Error("Failed to fetch customers");
        }
        const data = await response.json();
        setCustomers(data.customers); 
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCustomers();
  }, [currentPage, pageSize]);

  const handleEditClick = (customerId, customerData) => {
    setEditCustomerId(customerId);
    setEditedData(customerData);
  };

  const handleInputChange = (e, field) => {
    setEditedData({
      ...editedData,
      [field]: e.target.value,
    });
  };

  const handleDeleteClick = async (customerId) => {
    try {
      const response = await fetch(`https://company-wisdom-e17ny4wr0-sreejithsree30s-projects.vercel.app/customers/${customerId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setCustomers(customers.filter((customer) => customer._id !== customerId));
        console.log("Customer deleted successfully");
      } else {
        throw new Error("Failed to delete customer");
      }
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const handleSaveClick = async (customerId) => {
    try {
      const response = await fetch(`https://company-wisdom-e17ny4wr0-sreejithsree30s-projects.vercel.app/customers/${customerId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedData),
      });

      if (response.ok) {
        const updatedCustomer = await response.json();
        setCustomers(
          customers.map((customer) =>
            customer._id === customerId ? updatedCustomer : customer
          )
        );
        setEditCustomerId(null);
        console.log("Customer updated successfully");
      } else {
        throw new Error("Failed to update customer");
      }
    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  const handleCancelClick = () => {
    setEditCustomerId(null);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="customer-table-container">
      <h3 className="customer-table-title">All Customers</h3>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer._id}>
              {editCustomerId === customer._id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editedData.name || ""}
                      onChange={(e) => handleInputChange(e, "name")}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={editedData.email || ""}
                      onChange={(e) => handleInputChange(e, "email")}
                    />
                  </td>
                  <td>
                    <input
                      type="tel"
                      value={editedData.phone || ""}
                      onChange={(e) => handleInputChange(e, "phone")}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={
                        editedData.address
                          ? `${editedData.address.street || ""}, ${editedData.address.city || ""}, ${editedData.address.state || ""}, ${editedData.address.zip || ""}`
                          : ""
                      }
                      onChange={(e) => handleInputChange(e, "address")}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleSaveClick(customer._id)}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{customer.name || "No Name"}</td>
                  <td>{customer.email || "No Email"}</td>
                  <td>{customer.phone || "No Phone"}</td>
                  <td>
                    {customer.address
                      ? `${customer.address.street || ""}, ${customer.address.city || ""}, ${customer.address.state || ""}, ${customer.address.zip || ""}`
                      : "No Address"}
                  </td>
                  <td>
                    <button onClick={() => handleEditClick(customer._id, customer)}>Edit</button>
                    <button onClick={() => handleDeleteClick(customer._id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomerTable;
