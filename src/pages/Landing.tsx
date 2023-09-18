import Animation from "../components/Animation.tsx";
import landingImg from "../assets/landing-img.png";
import Button from "../components/Button.tsx";
import Container from "../components/Container.tsx";

const Landing = () => {
  return (
    <Container>
      <div className="flex items-center justify-center h-screen pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex-1 pr-8 lg:pt-12">
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
          <div className="hidden md:block ">
            <img src={landingImg} className="w-full h-auto" alt="Landing" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Animation(Landing);
