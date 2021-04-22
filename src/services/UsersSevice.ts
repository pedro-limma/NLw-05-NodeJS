import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"


class UserService{
  private usersRepository: Repository<User>

  constructor (){
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string){
    
    //Verificar se o usuário existe, se n existir salvar no banco
    const usersExists = await this.usersRepository.findOne({
      email
    })
    //se existir retornar usuário 
    if(usersExists){
      return usersExists;
    }

    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);

    return user;

  }
}

export { UserService }