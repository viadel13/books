import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AddBook, deletebook, deleteAllBook } from "../redux/actions/actionAddBooks";
import FlipMove from "react-flip-move";

const AddBooks = () => {
  const initialState = {
    title: "",
    author: "",
  };

  const [newData, setNewData] = useState(initialState);
  const dispatch = useDispatch();
  const dataLivre = useSelector((state) => state.library);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddBook(newData));
    setNewData(initialState);
  };

  const displayData =
    dataLivre.length > 0 ? (
      <FlipMove>
        {dataLivre.map((data) => {
          return (
            <li
              key={data.id}
              className="list-group-item list-group-light d-flex justify-content-between"
            >
              <span>
                <strong>Titre: </strong> {data.title}
              </span>
              <span>
                <strong>Auteur:</strong> {data.author}
              </span>
              <span className="btn btn-danger" onClick={()=>dispatch(deletebook(data.id))}>X</span>
            </li>
          );
        })}
      </FlipMove>
    ) : (
      <p className="text-center ">Aucune data a afficher</p>
    );
  const deleteAllBooks = dataLivre.length > 0 && (
    <button className="btn btn-danger mt-4 mb-5" onClick={()=>dispatch(deleteAllBook())}>
      Effacer tous les livres
    </button>
  );
  return (
    <main role="main">
      <div className="p-lg-5">
        <div className="container text-center">
          <h1 className="display-4">BOOKS</h1>
          <p>Ajouter un livre a votre bibliotheque</p>
          <form
            className="row g-3 d-flex justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="col-auto">
              <input
                type="text"
                placeholder="Titre"
                required
                className="form-control"
                value={newData.title}
                onChange={(e) =>
                  setNewData({ ...newData, title: e.target.value })
                }
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                placeholder="Auteur"
                required
                className="form-control"
                value={newData.author}
                onChange={(e) =>
                  setNewData({ ...newData, author: e.target.value })
                }
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-outline-secondary">
                Ajouter un livre
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-group">{displayData}</ul>
          </div>
          <div className="d-flex justify-content-center">{deleteAllBooks}</div>
        </div>
      </div>
    </main>
  );
};

export default AddBooks;
