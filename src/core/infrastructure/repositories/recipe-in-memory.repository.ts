import { Recipe } from '../../domain/entities/recipe.entity';

export interface IRecipeRepository {
  create(recipe: Recipe): Promise<Recipe>;
  findAll(): Promise<Recipe[]>;
  findById(id: string): Promise<Recipe | null>;
}

export class RecipeInMemoryRepository implements IRecipeRepository {
  private recipes: Recipe[] = [];

  create(recipe: Recipe): Promise<Recipe> {
    this.recipes.push(recipe);
    return Promise.resolve(recipe);
  }

  findAll(): Promise<Recipe[]> {
    return Promise.resolve(this.recipes);
  }

  findById(id: string): Promise<Recipe | null> {
    return Promise.resolve(
      this.recipes.find((recipe) => recipe.id === id) ?? null,
    );
  }
}
