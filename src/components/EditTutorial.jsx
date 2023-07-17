import { useEffect, useState } from "react";

const EditTutorial = ({ editItem }) => {
  const { id, description: newDescription, title: newTitle } = editItem; //? descrutirng

  const [title, setTitle] = useState(newTitle);
  const [description, setDescription] = useState(newDescription);

  return (
    <div>
      {/* Modal */}
      <div
        className="modal fade"
        id="openModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-danger"
                id="exampleModalLabel"
              >
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setDescription("");
                  setTitle("");
                }}
              />
            </div>
            <div className="modal-body"></div>
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Enter your title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="desc"
                  placeholder="Enter your Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-danger">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
