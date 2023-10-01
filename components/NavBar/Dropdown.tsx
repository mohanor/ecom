import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { Menu } from "../svgs";

import Link from "next/link";

export default function App() {
  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          <Menu className="text-3xl"/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem key="Home">
            <Link href="/">    
                Home
            </Link>
        </DropdownItem>
        <DropdownItem key="About">About</DropdownItem>
        <DropdownItem key="Products">Products</DropdownItem>
        <DropdownItem key="Contact">Contact</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}