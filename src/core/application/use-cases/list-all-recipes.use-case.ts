import { Injectable, Inject } from '@nestjs/common';
import { IRecipeRepository } from '../../infrastructure/repositories/recipe-in-memory.repository';

@Injectable()
export class ListAllRecipesUseCase {
  constructor(
    @Inject('IRecipeRepository')
    private readonly recipeRepository: IRecipeRepository,
  ) {}

  async execute() {
    return this.recipeRepository.findAll();
  }
}
