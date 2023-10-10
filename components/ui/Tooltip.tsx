import React from "react";
import {Tooltip, Button} from "@nextui-org/react";



type Props = {
  children: React.ReactNode
  content: string
}

export default function App({ children, content }: Props) {
  return (
    <Tooltip 
      showArrow
      placement="bottom"
      content={content}
      classNames={{
        base: "py-2 px-4 text-white text-sm bg-black-500 rounded-lg",
        arrow: "bg-black-300",
      }}
    >
      {children}
    </Tooltip>
  );
}
