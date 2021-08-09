import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import checkAuth from "../middleware/checkAuth";

const router = express.Router();

const { product } = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  const data = await product.findMany();
  res.json(data);
});

module.exports = router;
