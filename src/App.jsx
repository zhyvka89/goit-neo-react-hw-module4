import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import getPhotos from "./services/api";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [imageForModal, setImageForModal] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const listRef = useRef();

  useEffect(() => {
    if (!searchValue) return;
    setIsLoading(true);
    getPhotos(searchValue, page, 12)
      .then((res) => {
        setImages((prevImages) => [...prevImages, ...res.data.results]);
        setTotalPages(res.data.total_pages);
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
      toast("Please write a query word!");
    } else {
      setSearchValue(input.value);
    }
  }

  function handleClick() {
    setPage(page + 1);
    setTimeout(() => {
      scrollPage();
    }, 500);
  }

  function scrollPage() {
    const rect = listRef.current.getBoundingClientRect();
    window.scrollBy({ top: rect.width * 2, behavior: "smooth" });
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError ? (
        <ErrorMessage />
      ) : (
        <ImageGallery
          ref={listRef}
          images={images}
          openModal={openModal}
          setImageForModal={setImageForModal}
        />
      )}
      {isLoading && <Loader />}
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onClick={handleClick} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        image={imageForModal}
        closeModal={closeModal}
      />
      <ToastContainer/>
    </>
  );
}

export default App;
