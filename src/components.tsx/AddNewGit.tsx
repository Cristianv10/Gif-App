interface AddButtonProps {
    handleNewCategory: () => void;
  }
  
  export const AddButton: React.FC<AddButtonProps> = ({ handleNewCategory }) => {
    return <button onClick={handleNewCategory}>Add New Gif</button>;
  };
  