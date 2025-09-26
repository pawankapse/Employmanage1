import React from 'react'

const EmpUpdate = () => {
    
  return (
    <div className="form-container">
        <h2>Employee Form</h2>
        <form>
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

          <button type="submit">Submit</button>
        </form>
      </div>
  )
}

export default EmpUpdate

