import { forwardRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { list, item } from "./ImageGallery.module.css";

const ImageGallery = forwardRef(
  ({ images, openModal, setImageForModal }, ref) => (
    <ul className={list}>
      {images.map((image) => (
        <li className={item} key={image.id} ref={ref}>
          <ImageCard
            image={image}
            openModal={openModal}
            setImageForModal={setImageForModal}
          />
        </li>
      ))}
    </ul>
  )
);

ImageGallery.displayName = "ImageGallery";
export default ImageGallery;
