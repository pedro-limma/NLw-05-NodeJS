import { Request, Response } from "express";
import {SettingsRepository} from "../repositories/SettingsRepository";
import { getCustomRepository } from "typeorm";

class SettingsController {
  async create (request: Request, response:Response){
    const settingsRepository = getCustomRepository(SettingsRepository);

    const { chat, username } = request.body;

    const settings = settingsRepository.create({
      chat,
      username
    });

    await settingsRepository.save(settings)

    response.json(settings);
  }
}

export { SettingsController };