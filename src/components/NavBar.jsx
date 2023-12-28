import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar isBordered>
        
        <NavbarBrand>
  <p className="font-bold text-inherit">ShoePedia</p>
</NavbarBrand>
<NavbarContent className="hidden sm:flex gap-8 justify-end items-center" > {/* Increased spacing and right-aligned */}
  <NavbarItem isActive>
    <Link color="foreground" href="/">
      Tienda
    </Link>
  </NavbarItem>
  <NavbarItem isActive>
    <Link color="foreground" href="#">
      Proximos Lanzamientos
    </Link>
  </NavbarItem>
  <NavbarItem isActive>
    <Link color="foreground" href="#">
      Autenticación
    </Link>
  </NavbarItem>
</NavbarContent>


      <NavbarContent justify="end">
        <NavbarItem className="sm:hidden  gap-4" >
        <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Abrir Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" >
        <DropdownItem key="new">Tienda</DropdownItem>
        <DropdownItem key="copy">Proximos Lanzamientos</DropdownItem>
        <DropdownItem key="edit">Autenticación</DropdownItem>
       
      </DropdownMenu>
    </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
