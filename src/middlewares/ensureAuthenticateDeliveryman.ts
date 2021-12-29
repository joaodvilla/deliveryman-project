import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface IPayload {
  sub: string;
};

export async function ensureAuthenticateDeliveryman(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(token, String(process.env.SECRET_KEY)) as IPayload;
    
    req.idDeliveryman = sub;

    return next(); 
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};