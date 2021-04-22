import { getCustomRepository } from "typeorm"
import { UsersRepository } from "../repositories/UsersRepository"


class UserService{
  async create(email: string){
    
    //Verificar se o usuário existe, se n existir salvar no banco
    const usersRepository = getCustomRepository(UsersRepository);

    const usersExists = await usersRepository.findOne({
      email
    })
    //se existir retornar usuário 
    if(usersExists){
      return usersExists;
    }

    const user = usersRepository.create({
      email
    });

    await usersRepository.save(user);

    return user;

  }
}

export { UserService }