import { useCallback, useEffect, useState } from "react";
import { Category, CategoryResp } from "../data/Category";
import { Close } from "../common/Icon";
import CategoryList from "./CategoryList";

const Menu = () => {
  const [category, setCategory] = useState<Category[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [treeRoot, setTreeRoot] = useState<Category>();

  function buildTree(items: CategoryResp[], treeRoot: Category) {
    const map = new Map();
    const elemap = new Map();
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      map.set(element.id, element.parent_id);
      elemap.set(element.id, element);
    }
    function getKeysForValue<K, V>(map: Map<K, V>, valueToFind: V) {
      const keysWithMatchingValue = [];
      for (const [key, value] of map) {
        if (value === valueToFind) {
          keysWithMatchingValue.push(key);
        }
      }
      return keysWithMatchingValue;
    }
    function buildTreeRecursion(
      map: Map<number, number>,
      elemap: Map<number, CategoryResp>,
      treeRoot: Category
    ) {
      if (map.has(treeRoot.id)) {
        const keys = getKeysForValue(map, treeRoot.id);
        keys.forEach((key) => {
          let item: Category = {
            id: elemap.get(key)?.id || 0,
            name: elemap.get(key)?.name || "",
            level: elemap.get(key)?.level || 0,
            collapse: true,
            sub: [],
          };
          treeRoot.sub.push(item);
          buildTreeRecursion(map, elemap, item);
        });
      }
    }

    buildTreeRecursion(map, elemap, treeRoot);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8000/get_categorys", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        const roots = data
          .filter((ele: any) => {
            return ele["level"] === 0;
          })
          .map((ele: any) => {
            let cate: Category = {
              id: ele["id"],
              name: ele["name"],
              level: ele["level"],
              collapse: false,
              sub: [],
            };

            return cate;
          });
        console.log(data);

        roots[0].collapse = true;
        console.log("build tree...");
        for (let index = 0; index < roots.length; index++) {
          buildTree(data, roots[index]);
        }

        setTreeRoot(roots[0]);
        setCategory(roots);
        console.log(roots);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <div>loading</div>}
      {!isLoading && (
        <div>
          <Close className="m-2" />
          <div className="h-4" />
          <div className="grid  place-items-center">{error}</div>
          <div className="flex  space-x-4">
            {category?.map((one) => {
              return (
                <div className="w-2/3" key={one.id}>
                  <div className="grid place-items-center">{one.name}</div>
                  <div className="grid place-items-center">
                    {one.collapse && <img src="/assets/underline_orange.svg" />}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {treeRoot !== undefined ? (
              <CategoryList {...treeRoot}></CategoryList>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
