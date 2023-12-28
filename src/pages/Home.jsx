import { useState } from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <div className="container mx-auto p-8 text-center">
 
        <p className="text-lg text-gray-600">
          Descubre todo lo que necesitas sobre calzado, ¡todo en un solo lugar!
        </p>

        <Header />
      </div>
    </div>
  );
}

export default Home;
