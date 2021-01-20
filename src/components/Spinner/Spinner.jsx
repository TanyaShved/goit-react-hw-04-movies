import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => {
  return (
    <Loader
      type="Bars"
      color="#ff6b08"
      height={100}
      width={100}
      timeout={3000}
    />
  );
};

export default Spinner;
