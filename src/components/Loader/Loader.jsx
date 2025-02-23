import ClipLoader from "react-spinners/ClipLoader";
import { wrapper } from "./Loader.module.css";

function Loader() {
  return (
    <div className={wrapper}>
      <ClipLoader color='#ff00ff'/>
    </div>
  )
}

export default Loader