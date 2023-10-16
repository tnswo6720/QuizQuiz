// DisplayComponent.tsx

import React from "react";

interface DisplayProps {
  img: string;
  title: string;
  content: string;
  star: number;
}

const DisplayComponent: React.FC<DisplayProps> = ({
  img,
  title,
  content,
  star,
}) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Star: {star}</p>
    </div>
  );
};

export default DisplayComponent;
