import React from 'react';

interface FormOption {
  id: number;
  type: string;
  placeholder: string;
  label: string;
}

interface FormProps {
    props: FormOption[];
}

const Form: React.FC<FormProps> = ({ props }) => {
  return (
<form className="max-w-md mx-auto p-4 border rounded shadow">
      {props.map(option => (
        <div key={option.id} className="mb-4">
          <label className="block font-semibold mb-1">{option.label}</label>
          <input
            type={option.type}
            placeholder={option.placeholder}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
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
}

export default Form;
