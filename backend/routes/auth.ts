import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

const router = express.Router();

const { user } = new PrismaClient();

const secret = "gangadharhishaktimanhai";

// route /
router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to a noob auth system");
});

// signup
router.post(
  "/signup",
  // validate
  [
    check("name", "Please enter full name").isLength({ min: 3 }),
    check("email", "Please input a valid email").isEmail(),
    check(
      "phone",
      "Please input a valid phone number, min length of 10"
    ).isLength({
      min: 10,
    }),
    check(
      "password",
      "Please input a password with a min length of 6"
    ).isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const { name, email, phone, password } = req.body;

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      return res.status(400).json({
        errors: validationErrors.array(),
      });
    }

    // Validate if the user doesnt already exist;

    const userExists = await user.findUnique({
      where: {
        email,
      },
      select: {
        email: true,
      },
    });

    if (userExists) {
      return res.status(400).json({
        errors: [
          {
            msg: "User already exists",
          },
        ],
      });
    }

    // Hash the password

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create New User
    const newUser = await user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        password: false,
      },
    });

    // Create/Sign JWT
    const token = await sign({ sub: newUser.id }, secret, { expiresIn: 3600 });
    res.json({ token });
  }
);

// login
router.post(
  "/login",
  // validate
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      return res.status(400).json({
        errors: validationErrors.array(),
      });
    }

    // Check if the user exist;

    const userExists = await user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    });

    if (!userExists) {
      return res.status(401).json({
        errors: [
          {
            msg: "Invalid Credentials",
          },
        ],
      });
    }

    // Check if the password if match

    const isMatch = await bcrypt.compare(password, userExists.password);

    if (!isMatch) {
      return res.status(401).json({
        errors: [
          {
            msg: "Invalid Credentials",
          },
        ],
      });
    }

    // Create/Sign New JWT
    const token = await sign({ sub: userExists.id }, secret, {
      expiresIn: 3600,
    });
    res.json({ token });
  }
);

module.exports = router;
