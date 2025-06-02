import { Injectable, Inject } from '@nestjs/common';
import { IRecipeRepository } from '../../infrastructure/repositories/recipe-in-memory.repository';

@Injectable()
export class GetRecipeByIdUseCase {
  constructor(
    @Inject('IRecipeRepository')
    private readonly recipeRepository: IRecipeRepository,
  ) {}

  async execute(id: string) {
    return this.recipeRepository.findById(id);
  }
}
