import React, { useState } from "react";

interface FormOption {
  id: number;
  type: string;
  placeholder?: string;
  label: string;
  data?: string[]; // Add data field for radio options
}

interface FormProps {
  props: FormOption[];
}

const Form: React.FC<FormProps> = ({ props }) => {
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderInput = (option: FormOption) => {
    if (option.type === "radio" && option.data && option.data.length > 0) {
      return (
        <div>
          <label className="block font-semibold mb-1">{option.label}</label>
          {option.data.map((radioOption, index) => (
            <div key={index} className="mb-2">
              <input
                type="radio"
                name={option.label}
                value={radioOption}
                onChange={handleRadioChange}
              />
              <label className="ml-2">{radioOption}</label>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <label className="block font-semibold mb-1">{option.label}</label>
          <input
            type={option.type}
            name={option.label}
            placeholder={option.placeholder}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleInputChange}
          />
        </div>
      );
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      className="max-w-md mx-auto p-4 border rounded shadow"
      onSubmit={handleSubmit}
    >
      {props.map((option) => (
        <div key={option.id} className="mb-4">
          {renderInput(option)}
        </div>
      ))}
      <button
        type="submit"
        className="bg-slate-900 hover:bg-gray-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
