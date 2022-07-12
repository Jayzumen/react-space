import React, { useState } from "react";

const Pictures = ({ items, collection }) => {
  const [pictureData, setPictureData] = useState(items, collection);
  const [search, setSearch] = useState("");

  async function imageSearch() {
    const res = await fetch(
      `https://images-api.nasa.gov/search?q=${search}&page=1&media_type=image?api_key=${process.env.REACT_APP_NASA_API}`
    );
    const pic = await res.json();
    setPictureData(pic.collection.items);
    console.log({ pic });
  }

  return (
    <div className="w-full h-full text-white bg-gradient-to-r from-gray-600 to-gray-900">
      <div className="flex flex-col flex-wrap text-center pt-32">
        <h1 className="text-2xl mb-10">Search for an Image:</h1>
        <form>
          <input
            className="text-black bg-gray-400 p-3 w-60 rounded-md m-4"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search for an image"
            required
          />
          <input
            disabled={search === ""}
            onClick={imageSearch}
            type="submit"
            value="Search"
            className="text-xl p-2 border-2 rounded-md cursor-pointer"
          />
        </form>
      </div>

      <div>
        <div>
          {pictureData &&
            pictureData.map((pic) =>
              (<h1 className="text-xl text-white">{pic.data[0].title}</h1>)(
                <img
                  src={pic.links[0].href}
                  alt={pic.data[0].title}
                  className="h-fit max-w-[800px] "
                />
              )(<div>{pic}</div>)
            )}
        </div>
      </div>
    </div>
  );
};

export default Pictures;
