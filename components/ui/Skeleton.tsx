import React from "react";
import { Card, Skeleton, Button, Image } from "@nextui-org/react";

export default function App() {


  return (
    <div className="relative bg-gray-lighter-500 w-full border border-black-500/[.1] h-[477px]">
      <div className="h-[200px] bg-black-500">
        <Image
          width={300}
          height={200}
          alt="NextUI hero Image with delay"
          src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          className="bg-black-500"
        />
      </div>
    </div>
  );
}
