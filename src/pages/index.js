// import Conocenos from "@/components/Conocenos";
// import ContactForm from "@/components/form";
// import Home from "@/components/Home";
// import Navbar from "@/components/navbar";
// import React from "react";

// const index = () => {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <Conocenos />
//       <ContactForm />
//     </div>
//   );
// };

// export default index;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Conocenos from "@/components/Conocenos";
import ContactForm from "@/components/form";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";


const Index = () => {
  // Inicializa AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones
      easing: "ease-in-out", // Suavidad de la animación
      once: true, // Animación solo la primera vez que se ve
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <Conocenos />
      <ContactForm />
    </div>
  );
};

export default Index;
