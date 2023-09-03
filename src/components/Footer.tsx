import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4 absolute bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>
          &copy; {currentYear} Fixed Misr
        </p>
      </div>
    </footer>
  );
};

export default Footer;
