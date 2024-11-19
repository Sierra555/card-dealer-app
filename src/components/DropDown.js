import { Suspense } from 'react';
import Spinner from './Spinner';

const DropDown = ({ label, id, value, handleChange, children }) => {
  return (
    <div className="flex flex-col gap-2  w-full text-center">
      <label htmlFor="make" className="text-lg font-semibold">
        {label}
      </label>
      <select
        id={id}
        className="p-2 w-full md:w-[200px] border-[1px] truncate shadow-sm rounded cursor-pointer focus:outline-none focus-visible:shadow-lg hover:text-gray-500 hover:shadow-lg transition"
        value={value}
        onChange={handleChange}>
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </select>
    </div>
  );
};

export default DropDown;
