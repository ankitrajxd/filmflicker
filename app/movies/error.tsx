'use client'

import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <>
      <div>Something Unexpected Happened. </div>
      <Link href='../'>Go back</Link>
    </>
  );
};

export default error;
