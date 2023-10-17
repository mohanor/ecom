import { Button } from "@nextui-org/react";
import { Menu } from "../svgs";



export default function App() {
  return (


    <Button
      variant="bordered"
      aria-label="Menu"
    >
      <Menu className="text-3xl" />
    </Button>



  );
}