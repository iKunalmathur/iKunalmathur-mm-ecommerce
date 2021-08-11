import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import checkAuth from "../middleware/checkAuth";

const router = express.Router();

const { order } = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  const data = await order.findMany({
    include: {
      user: true,
      product: true,
    },
  });
  res.json(data);
});

router.post("/", async (req: Request, res: Response) => {
  const data = req.body;

  const dbres = await order.createMany({
    data,
  });

  res.json(dbres);

  //   res.json({ message: "under maintainance" });
});

module.exports = router;
