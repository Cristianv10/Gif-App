import React from "react";

interface DeleteButtonProps {
    handleDeleteCategory: () => void;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ handleDeleteCategory }) => {
  return <button onClick={handleDeleteCategory}>Delete search</button>;
};