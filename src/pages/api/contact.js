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

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Método no permitido" });
  }

  const { name, email, message } = req.body;

  try {
    // Enviar correo con Resend
    await resend.emails.send({
      from: "onboarding@resend.dev", // Debe estar verificado en Resend
      to: "erickingacalle@gmail.com",
      subject: "📩 Nuevo Mensaje de Contacto",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4; border-radius: 10px;">
          <h2 style="color: #333;">📢 Nuevo Mensaje de Contacto</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <blockquote style="border-left: 4px solid #007BFF; padding: 10px; background: #fff;">
            ${message}
          </blockquote>
          <br>
          <p style="font-size: 12px; color: #666;">📅 Enviado el: ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return res.status(500).json({ success: false, error: "Error al enviar el correo" });
  }
}
