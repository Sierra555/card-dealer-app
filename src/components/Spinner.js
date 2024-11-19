import { Loader } from 'react-feather';

function Spinner({ color, size }) {
  return (
    <div className="wrapper flex pt-2 justify-center items-start min-w-max min-h-screen opacity-50">
      <Loader color={color} size={size} />
    </div>
  );
}

export default Spinner;
