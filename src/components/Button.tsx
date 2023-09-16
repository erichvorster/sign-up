import { Link } from "react-router-dom";

type ButtonProps = {
  btnText: string;
  btnRoute?: string;
  btnColor: string;
  btnHandler?: () => void;
};

const Button = ({ btnText, btnRoute, btnColor, btnHandler }: ButtonProps) => {
  return (
    <>
      {btnRoute ? (
        <Link to={btnRoute}>
          <button className={`${btnColor} px-8 py-2 rounded-full`}>
            {btnText}
          </button>
        </Link>
      ) : (
        <button
          className={`${btnColor} px-8 py-2 rounded-full`}
          onClick={btnHandler}
        >
          {btnText}
        </button>
      )}
    </>
  );
};

export default Button;
