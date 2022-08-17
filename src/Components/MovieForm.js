const [genre, setGenre] = useState('')
  const [title, setTitle] = useState('')
  const [watched, setWatched] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    
    // const form = { genre, title, watched, image, description }

    fetch('http://localhost:3000/movies', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(
    {
    genre: genre,
    title: title,
    watched: watched,
    image: image,
    description: description
  }),
  
});
  }

  return (
    <form className="new-movie-form" onSubmit={handleSubmit}  >
      <h3>Add Movie</h3>
      <input
        type="text"
        value={title}
        placeholder="Title"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <select
    
        name="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      >
        <option value="">
          Select Genre:
        </option>
        <option>Action</option>
        <option>Horror</option>
        <option>Drama</option>
        <option>Comedy</option>
      </select>
      <br />
      <label>
        Watched?
        <input
          value={watched}
          type="checkbox"
          name="genre"
          onChange={(e) => setWatched(e.target.value)}
        />
      </label>
      <br />
      <input
        value={image}
        placeholder="Image"
        name="image"
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <textarea
        value={description}
        placeholder="Description"
        rows={10}
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input type="submit" value="Add Movie" />
    </form>
  )
}

export default MovieForm
