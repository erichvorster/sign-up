import { Link } from "react-router-dom";
import Spinner from "./Spinner";

type ButtonProps = {
  btnText: string;
  btnRoute?: string;
  btnColor: string;
  btnHandler?: () => void;
  loading?: boolean;
};

const Button = ({
  btnText,
  btnRoute,
  btnColor,
  btnHandler,
  loading,
}: ButtonProps) => {
  return (
    <>
      {btnRoute ? (
        <Link to={btnRoute}>
          <button
            className={`${btnColor} px-8 py-2 rounded-full hover:shadow-lg transition-shadow ease-in-out duration-200`}
          >
            {btnText}
          </button>
        </Link>
      ) : (
        <button
          className={`${btnColor} px-8 py-2 flex items-center justify-center mr-2 rounded-full w-full hover:shadow-lg transition-shadow ease-in-out duration-200 `}
          onClick={btnHandler}
        >
          {btnText} <Spinner loading={loading} />
        </button>
      )}
    </>
  );
};

export default Button;
