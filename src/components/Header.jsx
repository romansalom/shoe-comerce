import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function Header() {
  return (
 
    <div className="container mx-auto max-w-[1100px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mt-12">
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5 group hover:shadow-lg transition duration-300 ease-in-out"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover transition duration-300 ease-in-out transform group-hover:scale-150"
          src="/offWhite.jpg"
        />
        <CardFooter className="absolute bg-black/90 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-white text-tiny">Proximamente Disponibles</p>
          
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Ver Calendario
          </Button>
        </CardFooter>
      </Card>

      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7 group hover:shadow-lg transition duration-300 ease-in-out"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start"></CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
          src="/imagen4.jpg"
        />
        <CardFooter className="absolute bg-black/90 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div className="flex flex-col">
            <p className="text-tiny text-white">Disponibles en la tienda</p>
  
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Ver Tienda
          </Button>
        </CardFooter>
      </Card>
      <Card
        className="col-span-12 sm:col-span-4 h-[300px] group hover:shadow-lg transition duration-300 ease-in-out"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
          src="/authen.jpg"
        />
        <CardFooter className="absolute bg-black/90 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div className="flex flex-col">
            <p className="text-tiny text-white">Aprende a verificar tu calzado</p>
           
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm" href="/nostros">
            Ver Articulo
          </Button>
        </CardFooter>
      </Card>

      <Card
        className="col-span-12 sm:col-span-4 h-[300px] group hover:shadow-lg transition duration-300 ease-in-out"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
          src="/logo.jpeg"
        />
          <CardFooter className="absolute bg-black/90 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div className="flex flex-col">
            <p className="text-tiny text-white">Quienes Somos ?</p>

          </div>
          <Button
    className="text-tiny"
    color="primary"
    radius="full"
    size="sm"
    onClick={() => window.location.href = "/nosotros"}
  >
    Ver Mas
  </Button>
        </CardFooter>
      </Card>

      

      <Card
        className="col-span-12 sm:col-span-4 h-[300px] group hover:shadow-lg transition duration-300 ease-in-out"
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start"></CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
          src="/mantenimineto.webp"
        />
        <CardFooter className="absolute bg-black/90 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div className="flex flex-col">
            <p className="text-tiny text-white">Aprende a mantener tu calzado como nuevo</p>

          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Ver Consejos
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
