// GifExpertApp.tsx

import { useState } from "react";
import { AddCategory } from "../components.tsx/AddCategory";
import { GitGrid } from "./gitGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const addCategory = (newCategory: string) => {
    setCategories((categories) => [...categories, newCategory]);
  };

  const deleteCategory = (categoryToDelete: string) => {
    setCategories((categories) => categories.filter((category) => category !== categoryToDelete));
  };

  return (
    <>
      <h1>MY GIF APP</h1>
      <AddCategory onNewCategory={addCategory} />
      {categories.map((category, index) => (
        <GitGrid
          key={category}
          value={category}
          onDeleteCategory={index === categories.length - 1 ? deleteCategory : deleteCategory}
        />
      ))}
    </>
  );
};
