import React from 'react';

const Header = ({ title }) => {
  return (
    <div className="fixed w-full bg-background z-10 shadow-sm text-center mb-5 p-2">
      <h1 className="text-[40px] font-semibold">{title}</h1>
    </div>
  );
};

export default Header;
