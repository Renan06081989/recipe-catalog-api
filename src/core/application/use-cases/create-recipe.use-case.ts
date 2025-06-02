import { Injectable, Inject } from '@nestjs/common';
import { IRecipeRepository } from '../../infrastructure/repositories/recipe-in-memory.repository';
import { Recipe } from '../../domain/entities/recipe.entity';

@Injectable()
export class CreateRecipeUseCase {
  constructor(
    @Inject('IRecipeRepository')
    private readonly recipeRepository: IRecipeRepository,
  ) {}

  async execute(input: {
    title: string;
    description: string;
    ingredients: string[];
  }): Promise<Recipe> {
    const recipe = new Recipe({
      title: input.title,
      description: input.description,
      ingredients: input.ingredients,
    });

    return await this.recipeRepository.create(recipe);
  }
}
