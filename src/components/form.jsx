import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contacto"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-100"
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Contáctanos</h2>
        <p className="text-lg text-gray-600">
          Puedes enviarnos un mensaje o contactarnos directamente por{" "}
          <span className="font-bold text-green-600">WhatsApp</span>.
        </p>
      </div>

      <div className="w-full max-w-lg bg-white shadow-xl rounded-xl p-6">
        <Formik
          initialValues={{ name: "", email: "", message: "", date: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("El nombre es obligatorio"),
            email: Yup.string()
              .email("Correo inválido")
              .required("El correo es obligatorio"),
            message: Yup.string().required("El mensaje no puede estar vacío"),
          })}
          onSubmit={async (values, { resetForm }) => {
            setLoading(true);
            try {
              const { data } = await axios.post("/api/Contact", {
                ...values,
                date: new Date().toISOString(),
              });

              toast.success("Mensaje enviado correctamente");
              resetForm();
            } catch (error) {
              if (
                error.response?.data?.error ===
                "Este correo ya ha sido registrado."
              ) {
                toast.error("Este correo ya ha sido registrado.");
              } else {
                toast.error("Error al enviar el mensaje.");
              }
            } finally {
              setLoading(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">
                  Nombre
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Correo
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">
                  Mensaje
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
                disabled={isSubmitting || loading}
              >
                {loading ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg text-gray-600 mb-2">
          También puedes contactarnos por WhatsApp :
        </p>
        <a
          href="https://wa.me/51904145112"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp size={24} />
          <span>Escríbenos al +51 904145112</span>
        </a>
      </div>
    </section>
  );
};

export default ContactForm;
