import { useState } from "react";

const SearchBooks = () => {

  const[title, setTitle]= useState('')
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(title)
  }
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
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-outline-secondary">
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mt-4" style={{minHeight: '200px'}}>
        <div className="accordion">
            <div className="card mb-2">
                <div className="card-header">

                </div>
                <div className="collapse" data-parent="accordion">
                    <div className="card-body">
                        {
                            
                        }
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
};

export default SearchBooks;
