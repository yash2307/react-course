import { useEffect, useState } from "react";
import UseDebounce from "./hooks/useDebounce";

const STORAGE_KEY = "formDetails";

function AutoSaveForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });


  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

    // Debounce the form data
  const debouncedFormData = UseDebounce(formData, 500);

  // Save AFTER debounce
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(debouncedFormData)
    );
  }, [debouncedFormData]);


  // ✅ WRITE only on user actions
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedData = {
      ...formData,
      [name]: value
    };

    setFormData(updatedData);

  };

  const removeData = () => {
    const emptyData = { name: "", email: "", message: "" };

    setFormData(emptyData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(emptyData));
  };

  return (
    <div>
      <h1>Auto Save Form</h1>

      <form className="form">
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          data-testid="form-input"
        />

        <br /><br />

        <label>Email:</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          data-testid="form-email"
        />

        <br /><br />

        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          data-testid="form-message"
        />
      </form>

      <button
        type="button"
        onClick={removeData}
        data-testid="clear-btn"
      >
        Clear
      </button>
    </div>
  );
}

export default AutoSaveForm;