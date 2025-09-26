

import axios from "axios";
import "./style/ViewEmp.css";
import { useEffect, useState } from "react";

const ViewAllEmp = () => {
  useEffect(() => {
    getData();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    salary: "",
    city: "",
    mobile: "",
  });

  // ye id track karega kis employee ko update karna hai
  const [selectedId, setSelectedId] = useState(null);

  const [emp, setEmp] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/api/emp/view");
    setEmp(res.data.employ);
  };

  // Delete employee
  const Handledelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/emp/delete/${id}`);
    getData();
  };

  // Update button par click hote hi form me data load ho
  const HandleEdit = (item) => {
    setFormData({
      name: item.name,
      age: item.age,
      salary: item.salary,
      city: item.city,
      mobile: item.mobile,
    });
    setSelectedId(item._id); //  employee update i.d
  };

  // Form submit → agar selectedId hai to update warna add
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedId) {
      // update
      await axios.put(
        `http://localhost:5000/api/emp/update/${selectedId}`,
        formData
      );
    } else {
      // new employee add
      await axios.post("http://localhost:5000/api/emp/save", formData);

    }

    getData();

    // form reset
    setFormData({ name: "", age: "", salary: "", city: "", mobile: "" });
    setSelectedId(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>View All Emp</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>age</th>
            <th>mobile</th>
            <th>City</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {emp.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.mobile}</td>
              <td>{item.city}</td>
              <td>{item.salary}</td>
              <td>
                <button onClick={() => Handledelete(item._id)}>Delete</button>
                <button onClick={() => HandleEdit(item)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
        <h2>{selectedId ? "Update Employee" : "Add Employee"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Age:</label>
          <input
            type="number"
            name="age"
            placeholder="Enter age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            placeholder="Enter salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />

          <label>City:</label>
          <input
            type="text"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          <label>Mobile:</label>
          <input
            type="tel"
            name="mobile"
            placeholder="Enter mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {selectedId ? "Update Employee" : "Add Employee"}
          </button>
        </form>
      </div>
    </>
  );
};

export default ViewAllEmp;

