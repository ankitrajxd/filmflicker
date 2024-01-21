import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <Button className=" border-2" variant={"outline"}>
      <Link href={'/sign-in'}>
        <SignInButton />
      </Link>
    </Button>
  );
};

export default SignIn;
