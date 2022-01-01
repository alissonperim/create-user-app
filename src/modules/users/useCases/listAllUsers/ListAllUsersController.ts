import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(req: Request, res: Response): Response {
    const { user_id } = req.headers;
    const userId = user_id as string;
    try {
      const users = this.listAllUsersUseCase.execute({ user_id: userId });

      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
