export class Recipe {
  constructor(recipe: IRecipe) {
    this.data = recipe;
  }
  public data: IRecipe;
}
interface IRecipe {
  name: string;
  description: string;
  imagePath: string;
}
