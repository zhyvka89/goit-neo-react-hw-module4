

function SearchBar({onSubmit}) {

  

  return (
    <header>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="input"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  )
}

export default SearchBar