import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import redis from "../lib/cache";

const prisma = new PrismaClient();

export class UserController {
  static async find(req: Request, res: Response) {
    try {
      const cacheKey = "users:all";

      const cachedUsers = await redis.get(cacheKey);

      if (cachedUsers) {
        return res.json(JSON.parse(cachedUsers));
      }

      console.time("find");
      const users = await prisma.user.findMany();
      console.timeEnd("find");

      await redis.set(cacheKey, JSON.stringify(users));
      return res.status(200).json({ users });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error,
      });
    }
  }
}

export default UserController;
