import { useEffect, useState } from "react";
import { ProductDetail, Picture, ImageSlide } from "../data/Product";
import { useParams } from "react-router-dom";
import Header from "../common/Header";
import Carousel from "./Carousel";
import ProductAttribute from "./ProductAttribute";
import { Close, Heart, Plus } from "../common/Icon";

const ProductDetailView = () => {
  const [detail, setDetail] = useState<ProductDetail>();
  const id = useParams().id;
  const [previewType, setPreviewType] = useState<number>();
  const [previewPics, setPreviewPics] = useState<ImageSlide[]>([]);
  const [galleryPics, setGalleryPics] = useState<string[]>([]);
  const [previewIndex, setPreviewIndex] = useState(1);

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
      <Header />
      <div className="m-4">
        <Close
          className="absolute top-16 right-4 z-20"
          onClick={() => history.go(-1)}
        />
        {previewType == 1 && <Carousel images={previewPics}></Carousel>}
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

      <div className="fixed bottom-0 left-0 right-0 bg-black text-color=#fff h-14 pt-3 text-white phone-width">
        <div className="flex">
          <Plus className="ml-4 mr-4" color="#fff" />
          ADD TO BASKET
          <div className="m-auto" />
          <Heart color="#fff" className="mr-4" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
