import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/actionFetchBooks";
import {Link} from 'react-router-dom'
import { AddBook } from "../redux/actions/actionAddBooks";

const SearchBooks = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchBooks(title));
  };

  const handleSave = (title, author) =>{
    const bookToSave = {title, author}
    dispatch(AddBook(bookToSave))
  }

  const displayFetchedBooks = state.isLoading ? (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-info">
        <span className="sr-only"></span>
      </div>
    </div>
  ) : state.error !== "" ? (
    <p>{state.error}</p>
  ) : (
    state.fetchedBooks.map((data) => {
      return (
        <div className="card mb-2" key={data.id}>
          <div className="card-header">
            <h5 className="mb-0">
              <button
                class="btn accordion-button"
     
                data-bs-toggle="collapse"
                data-bs-target={`#${data.id}`}
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {data.volumeInfo.title}
              </button>
            </h5>
          </div>
          <div id={data.id} className="collapse" data-parent="#accordion">
            <div className="card-body">
              {data.volumeInfo.hasOwnProperty("imageLinks") && (
                <img
                  src={data.volumeInfo.imageLinks.thumbnail}
                  alt={data.volumeInfo.title}
                />
              )}

              <br />
              <h4 className="card-title"> Titre: {data.volumeInfo.title}</h4>
              <h5 card-title>Auteurs: {data.volumeInfo.authors}</h5>
              <p className="card-text">
                Description: {data.volumeInfo.description}
              </p>
              <Link
                className="btn btn-outline-secondary"
                to={data.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Plus d'infos
              </Link>
              <button onClick={() => handleSave(data.volumeInfo.title, data.volumeInfo.authors)} className="btn btn-outline-secondary ms-3">Enregistrer</button>
            </div>
          </div>
        </div>
      );
    })
  );

  return (
    <main role="main">
      <div className="p-lg-5">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Indiquez le sujet du livre a rechercher sur Google API</p>
          <form
            className="row g-3 d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                placeholder="Quoi rechercher ?"
                required
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-outline-secondary">Rechercher</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mt-4" style={{ minHeight: "200px" }}>
        <div  id="accordionExample">
          {displayFetchedBooks}
        </div>
      </div>
    </main>
  );
};

export default SearchBooks;
