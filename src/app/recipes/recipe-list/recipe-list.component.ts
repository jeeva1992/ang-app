import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a test description",
      "https://pixabay.com/get/52e1d24a4356b10ff3d89938b977692b083edbe25652704e742679/shish-kebab-417994_640.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
