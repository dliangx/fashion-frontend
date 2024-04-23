import { useContext, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { AppContext } from "../../App";

const Collections = () => {
  const selectedRef = useRef<HTMLImageElement>(null);
  const { brandCollections, setBrandCollections } = useContext(AppContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let collectionList: CollectionInfo[] = [];
    if (brandCollections.length == 0) {
      fetch(import.meta.env.VITE_API_URL + "/home_new_collection", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (let i = data.length - 1; i >= 0; i--) {
            const collection = data[i];
            collectionList.push({
              id: collection.id,
              pic: collection.pic,
              name: collection.name,
            });
          }
          setBrandCollections(collectionList);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, []);

  return (
    <div className="relative w-full mt-4">
      <div className="relative w-full overflow-hidden">
        <div className=" flex items-center transition duration-500 ease-in-out ">
          {brandCollections.map((collection, i) => (
            <img
              key={collection.id}
              ref={index === i ? selectedRef : null}
              src={collection.pic}
              alt={"collection" + collection.id}
            />
          ))}
        </div>
      </div>
      <div className=" absolute left-0 bottom-0  w-full flex items-center justify-center space-x-4">
        {brandCollections.map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 mb-8 rounded-full border-2 ${
              i === index ? "border-red-500" : "border-white"
            }`}
            onClick={() => {
              flushSync(() => {
                if (index < brandCollections.length - 1) {
                  setIndex(i);
                } else {
                  setIndex(0);
                }
              });
              if (selectedRef.current) {
                selectedRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                });
              }
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Collections;
