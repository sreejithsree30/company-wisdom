import express from "express";
import Customer from './Customers.js'

const routers = express.Router();

routers.get("/api/customers", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers); 
    console.log(customers)
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ error: "Failed to fetch customers" });
  }
});

routers.post("/api/customers", async (req, res) => {
    try {
      const newCustomer = new Customer(req.body);
      await newCustomer.save();
      res.status(201).json(newCustomer);
    } catch (error) {
      res.status(400).json({ message: "Error adding customer" });
    }
  });


routers.delete("/api/customers/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await Customer.findByIdAndDelete(id);
      res.status(200).json({ message: "Customer deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting customer" });
    }
  });

  
routers.put("/api/customers/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCustomer = await Customer.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedCustomer);
    }catch (error) {
        res.status(500).json({ message: "Error deleting customer" });
    }
})


export default routers;
