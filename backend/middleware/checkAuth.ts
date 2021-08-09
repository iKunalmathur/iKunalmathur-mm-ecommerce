import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
const secret = "gangadharhishaktimanhai";

const checkAuth = async (req: any, res: Response, next: NextFunction) => {
  const token = req.header("x-auth-token");

  // Check if token exist in header
  if (!token) {
    return res.status(400).json({
      errors: [
        {
          msg: "Access token required",
        },
      ],
    });
  }

  // Check if token vaild
  try {
    const user = await verify(token, secret);

    req.user = user.sub;

    next();
  } catch (error) {
    return res.status(403).json({
      errors: [
        {
          msg: "Invalid Access token",
        },
      ],
    });
  }
};

export default checkAuth;
