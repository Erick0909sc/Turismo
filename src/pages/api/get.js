import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const messages = await prisma.contactForm.findMany();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los mensajes" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Método ${req.method} no permitido`);
  }
}
