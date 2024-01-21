import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="flex justify-center h-[80vh] items-center p-[1rem] overflow-hidden">
      <SignUp />
    </div>
  );
};

export default SignInPage;
