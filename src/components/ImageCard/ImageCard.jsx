import { thumb, img } from "./ImageCard.module.css";

function ImageCard({ image, openModal, setImageForModal }) {
  function handleClick() {
    setImageForModal(image.urls.regular);
    openModal(true);
  }
  return (
    <div className={thumb}>
      <img
        className={img}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
    </div>
  );
}

export default ImageCard;
