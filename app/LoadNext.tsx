"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

let page = 2;

const LoadNext = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onClickNext = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    replace(`${pathname}?${params.toString()}`);
    page++;
  };

  return <Button className="my-3" onClick={onClickNext}>Next Page</Button>;
};

export default LoadNext;
