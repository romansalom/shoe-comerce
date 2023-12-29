import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button , Avatar} from "@nextui-org/react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar isBordered>
        
        <NavbarBrand>
  <div className="flex items-center">
    <Avatar
      isBordered
      as="button"
      className="transition-transform"
      color="secondary"
      name="Jason Hughes"
      size="sm"
      src="/logo.jpeg"
    />
    <p className="font-bold text-inherit ml-2">ShoePedia</p>
  </div>
</NavbarBrand>

<NavbarContent className="hidden sm:flex gap-8 justify-end items-center" > {/* Increased spacing and right-aligned */}
  <NavbarItem isActive>
    <Link color="foreground" href="/">
      Tienda
    </Link>
  </NavbarItem>
  <NavbarItem isActive>
    <Link color="foreground" href="#">
    Calendario
    </Link>
  </NavbarItem>
  <NavbarItem isActive>
    <Link color="foreground" href="#">
      Autenticación
    </Link>
  </NavbarItem>
  <NavbarItem isActive>
    <Link color="foreground" href="#">
      Mantenimiento
    </Link>
  </NavbarItem>
  <NavbarItem isActive>
    <Link color="foreground" href='/nosotros'>
      Nosotros
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
        <DropdownItem key="copy">Calendario</DropdownItem>
        <DropdownItem key="edit">Autenticación</DropdownItem>
        <DropdownItem key="nos">Mantenimiento</DropdownItem>
        <DropdownItem key="nos">Nosotros</DropdownItem>
       
       
      </DropdownMenu>
    </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
