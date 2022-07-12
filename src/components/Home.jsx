import React from "react";
import { Link } from "react-router-dom";
import spaceVideo from "../assets/space.mp4";

const Home = () => {
  return (
    <div>
      <div>
        <div className="pt-20">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full fixed object-cover"
          >
            <source src={spaceVideo} type="video/mp4" />
          </video>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col justify-center">
            <h1 className="text-7xl mb-20 text-gray-200 ">Explore the World</h1>
            <div className="flex flex-col max-w-fit mx-auto mb-4">
              <Link
                className="lg:text-2xl text-center text-md text-white border-2 rounded-md p-2 mb-4"
                to="/nasaPOTD"
              >
                Picture of the day
              </Link>
              <Link
                className="lg:text-2xl text-center text-md text-white border-2 rounded-md p-2 mb-4"
                to="/pictures"
              >
                Explore Pictures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
