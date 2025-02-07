// import prisma from "@/lib/prisma"; // Asegúrate de tener Prisma configurado

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;

//     try {
//       const contact = await prisma.contactForm.create({
//         data: { name, email, message },
//       });

//       return res.status(200).json({ success: true, contact });
//     } catch (error) {
//       return res.status(500).json({ success: false, error: "Error en el servidor" });
//     }
//   } else {
//     return res.status(405).json({ success: false, error: "Método no permitido" });
//   }
// }

import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Método no permitido" });
  }

  const { name, email, message } = req.body;

  try {
    const existingContact = await prisma.contactForm.findUnique({ where: { email } });

    if (existingContact) {
      return res.status(400).json({ success: false, error: "Este correo ya ha sido registrado." });
    }

    const contact = await prisma.contactForm.create({ data: { name, email, message } });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "erickingacalle@gmail.com",
      subject: "📩 Nuevo Mensaje de Contacto",
      html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Correo:</strong> ${email}</p><p><strong>Mensaje:</strong> ${message}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, contact });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return res.status(500).json({ success: false, error: "Error en el servidor" });
  }
}
