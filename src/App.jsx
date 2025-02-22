import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import "./App.css";
import { useEffect, useState } from "react";
import getPhotos from "./services/api";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [imageForModal, setImageForModal] = useState('')

  useEffect(() => {
    if (!searchValue) return;

    getPhotos(searchValue, page, "12")
      .then((res) => {
        setImages((prevImages) => [...prevImages, ...res.data.results]);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchValue, page]);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const { input } = form.elements;

    if (input.value === "") {
      toast("Please, Write a Prompt!");
    } else {
      setSearchValue(input.value);
    }
  }

  function handleClick() {
    setPage(page + 1);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError ? <ErrorMessage /> : <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onClick={handleClick} />}
      <ImageModal/>
    </>
  );
}

export default App;
