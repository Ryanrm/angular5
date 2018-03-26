export interface Recipes {
    title: string;
    instructions: string;
    ingredients: string;
  }
  
export interface RecipeID extends Recipes { 
    id: string; 
  }