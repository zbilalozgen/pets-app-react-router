import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Pet(props) {
  let classNameBtn = "btn btn-success";

  const addToFavorites = pet => {
    let owner = "Bilal";

    axios
      .post(`https://5d9f63b24d823c0014dd30d1.mockapi.io/test`, {
        owner,
        pet
      })
      .then(res => {
        res.status === 201 && (classNameBtn = " btn-danger");
      });
  };

  const { name, image, age, description, breed, id } = props;
  return (
    <div className="col-lg-6 col-md-4 mb-4">
      <div className="card h-100">
        <Link to={`/petdetail/${id}`}>
          <img
            className="card-img-top"
            src={image}
            alt=""
            style={{ height: "292px" }}
          />

          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{name}</a>
              <div>
                <span
                  className="badge badge-primary"
                  style={{ fontSize: "12px" }}
                >
                  {breed}
                </span>
              </div>
              <div>
                <span
                  className="badge badge-warning"
                  style={{ fontSize: "12px" }}
                >
                  {age}
                </span>
              </div>
            </h4>
            <p className="card-text">{description}</p>
          </div>
        </Link>

        <div className="card-footer">
          <div className={classNameBtn} onClick={() => addToFavorites(props)}>
            Favorilere Ekle
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pet;
