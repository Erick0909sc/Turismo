"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import travels from "@/data/info"; // Archivo JSON con imágenes y nombres

import "swiper/css";
import "swiper/css/navigation";

const Conocenos = () => {
  return (
    <section id="conocenos" className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
      {/* Descripción de la empresa */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mb-10"
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Bienvenido a <span className="text-blue-500">Turismo Ricky</span>
        </h2>
        <p className="text-lg text-gray-600">
          Descubre los mejores destinos con nosotros. En Turismo Ricky ,
          ofrecemos experiencias inolvidables en la costa, sierra y selva del
          Perú, con paisajes y cultura únicos. Contamos con cómodos y seguros
          vehículos para cada tipo de viaje: un Chevrolet Spin para 7 pasajeros
          y un InkaPower Foton para 17 pasajeros, ambos equipados con parrilla
          para mayor comodidad. Además, todos nuestros servicios incluyen un
          chofer profesional para que disfrutes tu aventura sin preocupaciones.
        </p>
      </motion.div>

      {/* Slider con mejor distribución en tamaño md */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-5xl"
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={50} // Más espacio entre slides
          slidesPerView={1} // Predeterminado: 1 slide
          breakpoints={{
            640: { slidesPerView: 1 }, // En sm sigue habiendo solo 1
            768: { slidesPerView: 2, spaceBetween: 30 }, // En md aparecen 2 slides
            1024: { slidesPerView: 3 }, // En lg y superior: 3 slides
          }}
          navigation={true}
          className="w-full px-6"
        >
          {travels.map((travel, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="bg-white rounded-xl overflow-hidden w-[90%] max-w-sm transform transition-transform hover:scale-105 shadow-lg">
                <Image
                  src={travel.image}
                  alt={travel.name}
                  width={520}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 text-center">
                    {travel.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Conocenos;
