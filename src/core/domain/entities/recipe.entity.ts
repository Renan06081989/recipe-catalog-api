export interface RecipeProps {
  title: string;
  description: string;
  ingredients: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export class Recipe {
  private _id: string;
  private props: RecipeProps;

  constructor(props: RecipeProps, id?: string) {
    this._id = id ?? Math.random().toString(36).substring(2, 9);
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      updatedAt: props.updatedAt ?? new Date(),
    };
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this.props.title;
  }

  set title(title: string) {
    this.props.title = title;
    this.props.updatedAt = new Date();
  }

  get ingredients(): string[] {
    return this.props.ingredients;
  }

  set ingredients(ingredients: string[]) {
    this.props.ingredients = ingredients;
    this.props.updatedAt = new Date();
  }

  get createdAt(): Date {
    return this.props.createdAt ?? new Date();
  }

  get updatedAt(): Date {
    return this.props.updatedAt ?? new Date();
  }

  // Método para o Presenter
  toJSON() {
    return {
      id: this._id,
      ...this.props,
    };
  }
}
