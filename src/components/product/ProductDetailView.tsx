import { useContext, useEffect, useState } from "react";
import { ProductDetail, Picture, ImageSlide } from "../data/Product";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ProductAttribute from "./ProductAttribute";
import { Back, Export, Heart, Plus } from "../common/Icon";
import { CartContext } from "../cart/CartContext";
import { FavoriteContext } from "../cart/FavoriteContext";

const ProductDetailView = () => {
  const [detail, setDetail] = useState<ProductDetail>();
  const id = useParams().id;
  const [previewType, setPreviewType] = useState<number>();
  const [previewPics, setPreviewPics] = useState<ImageSlide[]>([]);
  const [galleryPics, setGalleryPics] = useState<string[]>([]);
  const [previewIndex, setPreviewIndex] = useState(1);

  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const favoriteContext = useContext(FavoriteContext);
  const favoriteState = favoriteContext.state;
  const favoriteDispatch = favoriteContext.dispatch;
  const [isFavorite, setIsFavorite] = useState(false);
  const itemIndex = favoriteState.items.findIndex(
    (item) => item.id === Number(id)
  );
  useEffect(() => {
    setIsFavorite(itemIndex >= 0 ? true : false);
  }, []);

  useEffect(() => {
    let preview_type = 1;
    let preview_pics: ImageSlide[] = [];
    let gallery_pics: string[] = [];
    const url =
      import.meta.env.VITE_API_URL + "/get_product_detail/" + String(id);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const pics: Picture[] = data.pics;

        pics.forEach((pic) => {
          if (pic.t == 1 || pic.t == 2) {
            preview_pics.push({
              src: pic.url,
              alt: pic.t.toString(),
            });
            preview_type = pic.t;
          } else if (pic.t == 3) {
            gallery_pics.push(pic.url);
          }
        });
        if (preview_pics.length == 0) {
          preview_pics.push({
            src: data.info.pic,
            alt: data.info.name,
          });
        }
        setPreviewType(preview_type);
        setPreviewPics(preview_pics);
        setGalleryPics(gallery_pics);
        setDetail(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);
  return (
    <div>
      <div className="flex mt-4">
        <Back className=" ml-4 " onClick={() => history.go(-1)} />
        <div className="m-auto" />
        <Export className="mr-4" />
        <Heart
          className="mr-4"
          color="#ff4700"
          fill={isFavorite ? "#ff4700" : "none"}
          onClick={() => {
            if (localStorage.getItem("user_token") == undefined) {
              navigate("/login");

              return;
            }
            if (itemIndex >= 0) {
              favoriteDispatch != null &&
                favoriteDispatch({
                  type: "REMOVE",
                  payload: {
                    id: detail?.info != undefined ? detail?.info.id : 0,
                    pic: detail?.info != undefined ? detail?.info.pic : "",
                    brand: detail?.info != undefined ? detail?.info.brand : "",
                    name: detail?.info != undefined ? detail?.info.name : "",
                    price: detail?.info != undefined ? detail?.info.price : 0,
                  },
                });
              setIsFavorite(false);
            } else {
              favoriteDispatch != null &&
                favoriteDispatch({
                  type: "ADD",
                  payload: {
                    id: detail?.info != undefined ? detail?.info.id : 0,
                    pic: detail?.info != undefined ? detail?.info.pic : "",
                    brand: detail?.info != undefined ? detail?.info.brand : "",
                    name: detail?.info != undefined ? detail?.info.name : "",
                    price: detail?.info != undefined ? detail?.info.price : 0,
                  },
                });
              setIsFavorite(true);
            }
          }}
        />
      </div>

      <div className="m-4">
        {previewType == 1 && (
          <Carousel images={previewPics} isListButton={false}></Carousel>
        )}
        {previewType == 2 && (
          <div>
            <img src={previewPics[previewIndex].src} />
            <div className="flex overflow-x-scroll mt-4">
              {previewPics.map((pic, index) => {
                return (
                  <img
                    src={pic.src}
                    key={index.toString()}
                    className="w-1/3 h-24 mr-4"
                    onClick={() => {
                      setPreviewIndex(index);
                    }}
                  />
                );
              })}
            </div>
          </div>
        )}
        <div>
          <div className="font-mono text-xl">{detail?.info.brand}</div>
          <div className="font-sans">{detail?.info.name}</div>
          <div className="font-sans text-orange-500">${detail?.info.price}</div>
        </div>
        {detail?.attr != undefined && <ProductAttribute attrs={detail.attr} />}
        {galleryPics.map((pic, index) => {
          return (
            <div className="mt-4">
              <img src={pic} alt={index.toString()} />
            </div>
          );
        })}
      </div>

      <div
        className="fixed bottom-0 left-0 right-0 bg-black text-color=#fff h-14  
      place-content-center text-white phone-width"
        onClick={() => {
          dispatch != null &&
            detail != undefined &&
            dispatch({
              type: "ADD",
              payload: {
                id: detail?.info.id,
                pic: detail?.info.pic,
                brand: detail?.info.brand,
                name: detail?.info.name,
                price: detail?.info.price,
                num: 0,
                attr: [],
              },
            });
        }}
      >
        <div className="flex  place-content-center">
          <Plus className="mr-4 ml-4" color="#fff" />
          ADD TO BASKET
          <div className="m-auto" />
          {/* <ShoppingBag color="#fff" /> */}
          <div
            className="mr-4   place-content-start"
            onClick={() => {
              navigate("/cart");
            }}
          >
            CART({state.items.length})
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
