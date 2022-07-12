import React, { useEffect, useState } from "react";

const NasaPictures = () => {
  const [pictureData, setPictureData] = useState(null);

  useEffect(() => {
    fetchPicture();

    async function fetchPicture() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API}`
      );

      const data = await res.json();
      setPictureData(data);
      // console.log(data);
    }
  }, []);

  if (!pictureData) return <div />;

  return (
    <div className="w-full h-full text-white bg-gradient-to-r from-gray-600 to-gray-900">
      <div className="flex justify-center max-w-[80%] md:max-w-[800px] mx-auto">
        <div>
          <h1 className="text-center text-3xl mt-24 mb-4 text-sky-500">
            {pictureData.title}
          </h1>
          {pictureData.media_type === "image" ? (
            <img
              className="w-fit h-fit max-w[80%]"
              src={pictureData.hdurl}
              alt={pictureData.title}
            />
          ) : (
            <iFrame
              title={pictureData.title}
              src={pictureData.url}
              frameBorder="0"
              gesture="media"
              allow="encrypted-media"
              className="w-fit h-fit max-w[80%]"
            />
          )}

          <p className="flex justify-end mr-4 text-sky-500">
            {pictureData.date}{" "}
          </p>
          <p className="max-w-2xl mx-auto mt-4 mb-20 ">
            {pictureData.explanation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NasaPictures;
