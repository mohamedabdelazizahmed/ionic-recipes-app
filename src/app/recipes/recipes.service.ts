import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe []= [
    {
      id:'recipe-1',
      title:' Schnitzel',
      imageUrl:'https://natashaskitchen.com/wp-content/uploads/2016/02/Pork-Schnitzel-Recipe-5.jpg',
      ingredients:['French frise', 'Pork Meat']
    },
    {
      id:'chicken-1',
      title:' chicken',
      imageUrl:'https://www.crunchycreamysweet.com/wp-content/uploads/2018/07/sesame-chicken-5-Copy.jpg',
      ingredients:['chicken frise', 'Pork Meat']
    },
    {
      id:'Spaghetti-1',
      title:' Hearty Garden Spaghetti Recipe',
      imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqd7q335VLlYCnUy3OIMaZbuALLHDyM1bBxZJmEv4QUxdkrbb',
      ingredients:['Makroines', 'Meat' ,'Tomatoms']
    }
  ];
  constructor() { }
  /**
   *  Get All Recipes 
   * @returns copy of recipes[]
   */
  getAllRecipes(){
    return [...this.recipes];
  }

  /**
   *  get one recipe using id 
   * @param recipeId 
   * @returns 
   */
  getRecipe(recipeId: string){
    return{
      ...this.recipes.find(recipe =>{ 
        return recipe.id === recipeId;
      })
  
    }
  }

  /**
   *  Delete Recipe 
   * 
   * @param recipeId 
   */
  deleteRecipe(recipeId: string){
    console.log(".... deleteRecipe ")
    this.recipes =  this.recipes.filter(recipe =>{ 

      return recipe.id !== recipeId;
    });
    console.log(this.recipes);
  }
}
