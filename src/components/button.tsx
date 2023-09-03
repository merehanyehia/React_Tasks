import React from "react";

// export interface ButtonProps {
//   button: ButtonInterface;
//   type?: string,
//   classStyle?: string,
//   label?: string,
// }

export interface ButtonInterface {
  onClick: () => void;
  children: string;
}


const Button: React.FC<ButtonInterface> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};


export default Button;

