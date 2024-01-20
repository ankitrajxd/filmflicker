import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex justify-center h-[80vh] items-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
