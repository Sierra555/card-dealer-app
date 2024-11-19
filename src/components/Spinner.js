import { Loader } from 'react-feather';

function Spinner({ color, size }) {
  return (
    <div className="flex pt-24 justify-center items-start opacity-50">
      <Loader color={color} size={size} className="animate-spin" />
    </div>
  );
}

export default Spinner;
