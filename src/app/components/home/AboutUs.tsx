import React from 'react';
import Beliefs from './Beliefs';
import beliefs from './beliefData';

const AboutUs = () => {
  return (
    <div className="flex flex-col h-fit ">
      <h1 className=" font-bold text-3xl w-full h-fit text-center py-5">
        What we Believe
      </h1>

      <div className="  flex justify-center p-5 h-fit ">
        <div className="grid md:grid-cols-2 lg:grid-cols-4  w-full px-6 md:px-12 gap-7 ">
          {beliefs.map((belief) => (
            <Beliefs
              title={belief.title}
              text={belief.text}
              verse={belief.verse}
              image={belief.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
