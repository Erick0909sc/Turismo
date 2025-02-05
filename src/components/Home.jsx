// "use client";

// import React from "react";
// import Image from "next/image"; 
// import { motion } from "framer-motion"; // Efectos animados
// import car from "@/assets/car.jpg";

// const Home = () => {
//   return (
//     <section className="relative h-screen flex flex-col items-center justify-center">
//       {/* Imagen de fondo */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src={car}
//           alt="Paisaje turístico"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//         />
//       </div>

//       {/* Texto superior */}
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-5xl font-extrabold text-white drop-shadow-lg mb-8 text-center"
//       >
//         Bienvenido a <span className="text-yellow-400">Turismo Ricky</span>
//       </motion.h1>

//       {/* Card central con animación */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="bg-white shadow-2xl rounded-3xl p-8 w-3/4 max-w-2xl text-center"
//       >
//         <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-pulse">
//           🌍 Vive la mejor experiencia de viaje 🌍
//         </h2>
//         <p className="text-lg text-gray-600 mb-6">
//           Explora paisajes increíbles, sumérgete en la cultura y disfruta de momentos inolvidables.
//         </p>
//         <button className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold hover:bg-blue-700 transition duration-300 shadow-md">
//           ¡Descubre más!
//         </button>
//       </motion.div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Efectos animados
import car from "@/assets/car.jpg";
import { FaArrowDown } from "react-icons/fa"; // Importar icono de flecha

const Home = () => {
  // Función de desplazamiento hacia la sección Conocenos
  const scrollToConocenos = () => {
    const conocenosSection = document.getElementById("conocenos");
    if (conocenosSection) {
      conocenosSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={car}
          alt="Paisaje turístico"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Texto superior */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-white drop-shadow-lg mb-8 text-center"
      >
        Bienvenido a <span className="text-yellow-400">Turismo Ricky</span>
      </motion.h1>

      {/* Card central con animación */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-2xl rounded-3xl p-8 w-3/4 max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-pulse">
          🌍 Vive la mejor experiencia de viaje 🌍
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Explora paisajes increíbles, sumérgete en la cultura y disfruta de momentos inolvidables.
        </p>
        <button
          onClick={scrollToConocenos} // Llama a la función para desplazar
          className="bg-blue-600 text-white py-3 px-8 rounded-full font-bold hover:bg-blue-700 transition duration-300 shadow-md flex justify-center items-center gap-2 mx-auto"
        >
          ¡Descubre más!
          {/* Flecha hacia abajo */}
          <FaArrowDown className="text-white" />
        </button>
      </motion.div>
    </section>
  );
};

export default Home;
