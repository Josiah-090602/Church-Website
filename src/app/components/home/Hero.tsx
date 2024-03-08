import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero min-h-screen opacity-100"
      style={{
        backgroundImage: 'url(/background.jpg)',
      }}
    >
      <div className="hero-overlay bg-opacity-70 p-3"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-100 ">
          <h1 className="mb-5 text-3xl font-bold">Welcome to</h1>
          <h1 className="mb-5 text-4xl font-bold">
            FOURSQUARE YOUTH PEARL DIVISION
          </h1>
          <p className="mb-5 text-lg">
            “Jesus Christ is the same yesterday and today and forever.” |{' '}
            <span className=" text-yellow-500">Hebrews 13:8</span>
          </p>
          <button className="btn btn-dark rounded-none">Our Activities</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
