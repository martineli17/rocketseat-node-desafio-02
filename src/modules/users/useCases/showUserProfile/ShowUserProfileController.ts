import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id });

      return response.status(200).json(user).send();
    } catch (ex) {
      const errorResponse = { error: ex.message };

      return response.status(404).json(errorResponse).send();
    }
  }
}

export { ShowUserProfileController };
