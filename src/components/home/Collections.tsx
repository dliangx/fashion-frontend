import { useContext, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { AppContext } from "../../App";
import { CollectionInfo } from "../data/Product";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const selectedRef = useRef<HTMLImageElement>(null);
  const { brandCollections, setBrandCollections } = useContext(AppContext);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let intervalIndex = 0;
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
    const interval = setInterval(() => {
      console.log(intervalIndex);
      flushSync(() => {
        if (brandCollections.length > 0) {
          intervalIndex = (intervalIndex + 1) % brandCollections.length;
          setIndex(intervalIndex);
        } else if (collectionList.length > 0) {
          intervalIndex = (intervalIndex + 1) % collectionList.length;
          setIndex(intervalIndex);
        }
      });
      if (selectedRef.current) {
        selectedRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }, 3000);
    return () => clearInterval(interval);
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
              onClick={() => navigate("/collection/" + collection.id)}
            />
          ))}
        </div>
      </div>
      <div className="absolute left-0 bottom-10  w-full flex items-center justify-center ">
        <button
          className="rounded-full bg-black p-2 bg-opacity-30 text-white"
          onClick={() => {
            navigate("/collection");
          }}
        >
          EXPLORE COLLECTION
        </button>
      </div>
      <div className=" absolute left-0 bottom-0  w-full flex items-center justify-center space-x-1">
        {brandCollections.map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 mb-4 rounded-full border-3 ${
              i === index ? " bg-black" : "bg-white"
            }`}
            onClick={() => {
              flushSync(() => {
                setIndex(i);
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
