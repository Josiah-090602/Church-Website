import React from 'react';

const Beliefs = ({
  text,
  image,
  verse,
  title,
}: {
  text: string;
  image: string;
  verse: string;
  title: string;
}) => {
  return (
    <div className="card w-10/12   bg-base-100 shadow-xl justify-self-center">
      <div className="card-body h-fit flex flex-col items-center p-5">
        <img className=" rounded-xl w-1/2" src={image} alt="image" />
        <h2 className="card-title text-xl">{title}</h2>
        <div className=" flex flex-col items-between">
          <p className="h-auto text-sm md:text-md">{verse}</p>
          <p className="h-fit">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
