import { Module } from '@nestjs/common';
import { RecipesController } from './presentation/controllers/recipes.controller';
import { RecipeInMemoryRepository } from './core/infrastructure/repositories/recipe-in-memory.repository';
import { CreateRecipeUseCase } from './core/application/use-cases/create-recipe.use-case';
import { ListAllRecipesUseCase } from './core/application/use-cases/list-all-recipes.use-case';
import { GetRecipeByIdUseCase } from './core/application/use-cases/get-recipe-by-id.use-case';

@Module({
  controllers: [RecipesController],
  providers: [
    {
      provide: 'IRecipeRepository',
      useClass: RecipeInMemoryRepository,
    },
    CreateRecipeUseCase,
    ListAllRecipesUseCase,
    GetRecipeByIdUseCase,
  ],
})
export class AppModule {}
