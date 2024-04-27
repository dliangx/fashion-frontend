import { useEffect, useState } from "react";
import { AttributeProps } from "../data/Product";

type attr = {
  name: string;
  values: string[];
};

const ProductAttribute = (props: AttributeProps) => {
  const [attrs, setAttrs] = useState<attr[]>([]);

  useEffect(() => {
    let attrRes = [];
    let attr_cache: string[] = [];
    let attr_name_cache = "";
    for (let index = 0; index < props.attrs.length; index++) {
      const element = props.attrs[index];
      if (attr_name_cache == "") {
        attr_name_cache = element.name;
        attr_cache.push(element.value);
      } else if (attr_name_cache != element.name) {
        const attr1: attr = { name: attr_name_cache, values: attr_cache };
        attrRes.push(attr1);
        attr_cache = [];
        attr_name_cache = element.name;
        attr_cache.push(element.value);
      } else if (attr_name_cache == element.name) {
        attr_cache.push(element.value);
      }
    }
    const attr2: attr = { name: attr_name_cache, values: attr_cache };
    attrRes.push(attr2);
    setAttrs(attrRes);
  }, [props]);

  return (
    <>
      <div className="flex flex-wrap">
        {attrs.map((attr, index) => {
          return (
            <div className="flex " key={index.toString()}>
              <h2 className="mr-4 font-sans">{attr.name}</h2>

              {attr.values.map((value) => {
                return (
                  <div className="mr-4" key={value}>
                    {attr.name == "Color" && (
                      <>
                        <button
                          className={`w-4 h-4  rounded-full border-2  
                            ${value === "black" ? " bg-black" : "bg-black"} 
                            ${
                              value === "orange" ? " bg-orange-500" : "bg-black"
                            } 
                              ${
                                value === "white" ? " bg-gray-200" : "bg-black"
                              } 
                            `}
                        ></button>
                      </>
                    )}
                    {attr.name != "Color" && (
                      <button className="w-5 h-5  rounded-full border-2 text-xs  align-text-top">
                        {value}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductAttribute;
