import { ChangeEvent, FormEvent, useState } from "react";

interface AddCategoryProps {
    onNewCategory: (newCategory: string) => void;
}

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: FormEvent) => {
      event.preventDefault();
    if (inputValue.trim().length <= 2) return;
      onNewCategory(inputValue.trim());
      setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};



