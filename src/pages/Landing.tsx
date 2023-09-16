import Animation from "../components/Animation.tsx";
import landingImg from "../assets/landing-img.png";
import Button from "../components/Button.tsx";

const Landing = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="flex-1 pr-8 ">
            <h1 className="font-bold text-4xl mb-4">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="mb-4 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              tempore aliquam dolores mollitia accusantium reiciendis.
            </p>
            <Button
              btnText="Sign Up"
              btnRoute="/login"
              btnColor="bg-yellow-300"
            />
          </div>
          <div className="flex-1">
            <img src={landingImg} className="w-full h-auto" alt="Landing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animation(Landing);
