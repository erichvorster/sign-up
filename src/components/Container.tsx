import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container mx-auto h-screen px-4 lg:px-8 xl:px-14">
      {children}
    </div>
  );
};

export default Container;
