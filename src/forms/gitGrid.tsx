import React, { useEffect, useState, useCallback } from "react";
import { GifItems } from "../components.tsx/GitItems";
import { DeleteButton } from "../components.tsx/DeleteButtom";
import { AddButton } from "../components.tsx/AddNewGit";

interface GitGridProps {
  value: string;
  onDeleteCategory?: (deleteCategory: string) => void;
}

interface GifData {
  id: string;
  title: string;
  url: string;
}

export const GitGrid: React.FC<GitGridProps> = ({ value, onDeleteCategory }) => {
  const [images, setImages] = useState<GifData[]>([]);
  const [limit, setLimit] = useState<number>(2);

  // Utilizamos useCallback para memorizar la función getImages
  const getImages = useCallback(async () => {
    const getGifs = async (searchValue: string): Promise<GifData[]> => {
      console.log(limit);
      const url = `http://api.giphy.com/v1/gifs/search?api_key=MbBDGTpbJLjlXsocZxcX0sOUa9A8S1vK&q=${searchValue}&limit=${limit}`;
      const answer = await fetch(url);
      const { data } = await answer.json();
      const gifs: GifData[] = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
      }));
      return gifs;
    };

    const newImages = await getGifs(value);
    setImages(newImages);
  }, [limit, value]);

  useEffect(() => {
    getImages();
  }, [getImages]);

  const handleDeleteCategory = () => {
    if (onDeleteCategory) {
      onDeleteCategory(value);
    }
  };

  const handleNewCategory = () => {
    setLimit(limit + 1);
  };

 return (
    <div className="git-grid-container">
      <div className="git-grid-header">
        <h3>{value}</h3>
        {onDeleteCategory && (
          <div className="buttons-container">
            <DeleteButton handleDeleteCategory={handleDeleteCategory} />
            <AddButton handleNewCategory={handleNewCategory} />
          </div>
        )}
      </div>
      <div className="card-grid">
        {images.map((image) => (
          <GifItems key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};

