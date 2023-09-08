import React from "react";

interface GifItemsProps {
  title: string;
  url: string;
  id: string;
}

export const GifItems: React.FC<GifItemsProps> = ({ title, url, id }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img
          key={id}
          src={url}
          alt={title}
        />
      </div>
    </div>
  );
};
