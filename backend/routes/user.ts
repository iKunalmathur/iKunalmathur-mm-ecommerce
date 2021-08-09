import { PrismaClient } from "@prisma/client";
import express, { json, Request, Response } from "express";
import checkAuth from "../middleware/checkAuth";

const router = express.Router();
const { user } = new PrismaClient();

router.get("/:id", checkAuth, async (req: any, res: Response) => {
  const { id } = req.params;

  const userId: number = parseInt(id);

  if (req.user !== userId) {
    return res.status(400).json({
      errors: [
        {
          msg: "Invalid request",
        },
      ],
    });
  }

  // get user details without password
  const userData = await user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      password: false,
    },
  });

  if (!userData) {
    return res.status(404).json({
      errors: [
        {
          msg: "User not found",
        },
      ],
    });
  }

  return res.json(userData);
});

module.exports = router;
