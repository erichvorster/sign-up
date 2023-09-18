import Animation from "../components/Animation.tsx";
import SignupForm from "../components/SignupForm.tsx";
import loginImg from "../assets/login-img.png";
import Container from "../components/Container.tsx";
import Logo from "../assets/logo.png";

const SignUp = () => {
  return (
    <Container>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-200 w-1/2 -z-10 hidden lg:block" />
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="order-last lg:order-first px-8 pt-12 lg:pt-12 xl:pt-24 text-center">
          <h3 className="text-3xl font-bold pb-4 text-neutral-800">
            Lorem ipsum dolor sit amet fol.
          </h3>
          <p className="max-w-md mx-auto text-neutrL-600 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            dolore nemo et dicta quam vel?
          </p>
          <img src={loginImg} className="w-full h-auto" alt="Landing" />
        </div>
        <div className="order-first lg:order-last  pt-12 lg:pt-12 xl:pt-24">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <img src={Logo} alt="Logo" className="w-12 h-auto" />
              <h3 className="text-4xl font-bold text-neutral-800">Dart</h3>
            </div>
          </div>
          <SignupForm />
        </div>
      </div>
    </Container>
  );
};

export default Animation(SignUp);
