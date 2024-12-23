'use client';

const Container = ({ children }) => {
  return (
    <div className="max-w-[2530px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 pt-24">
      {children}
    </div>
  );
};

export default Container;
