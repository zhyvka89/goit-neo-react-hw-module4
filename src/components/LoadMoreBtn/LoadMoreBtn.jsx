import { wrapper, btn } from "./LoadMoreBtn.module.css";

function LoadMoreBtn({onClick}) {
  return (
    <div className={wrapper}>
      <button className={btn} type="button" onClick={onClick}>Load More</button>
    </div>
  )
}

export default LoadMoreBtn