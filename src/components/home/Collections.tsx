import { useRef, useState } from "react";
import { flushSync } from "react-dom";

const Collections = () => {
  const selectedRef = useRef(null);
  const [index, setIndex] = useState(0);
  const catList = [];
  for (let i = 1; i < 5; i++) {
    catList.push({
      id: i,
      imageUrl: "/assets/image15" + i + ".png",
    });
  }
  return (
    <div className="relative w-full ">
      <div className="relative w-full overflow-hidden">
        <div className=" flex items-center transition duration-500 ease-in-out ">
          {catList.map((cat, i) => (
            <img
              key={cat.id}
              ref={index === i ? selectedRef : null}
              // className={index === i ? "active" : ""}
              src={cat.imageUrl}
              alt={"collection" + cat.id}
            />
          ))}
        </div>
      </div>
      <div className=" absolute left-0 bottom-0  w-full flex items-center justify-center space-x-4">
        {catList.map((_, i) => (
          <button
            key={i}
            className="w-4 h-4 mb-8 rounded-full border-2 "
            onClick={() => {
              flushSync(() => {
                if (index < catList.length - 1) {
                  setIndex(i);
                } else {
                  setIndex(0);
                }
              });
              selectedRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
            }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Collections;
