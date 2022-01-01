import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (user.admin === false) {
      throw new Error(`This user has no permission to get all users`);
    } else if (!user) {
      throw new Error(`This userId doesn't exists`);
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
