import React, { useState } from "react";


const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { color: "red",width: 10, height: 10 };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        name="color"
        placeholder="Box Color"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        placeholder="Box Width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        placeholder="Box Height"
        value={formData.height}
        onChange={handleChange}
      />

      <button>Add new colored box!</button>
    </form>
  );
};

export default NewBoxForm;
