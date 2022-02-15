import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getList } from "../../Actions/Actions";

import { Link } from "react-router-dom";
import { deleteList } from "../../Actions/Actions";
export default function Home() {
  const dispatch = useDispatch();
  dispatch(getList());
  const list = useSelector((store) => store.SRlist);
  console.log(list);

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">To Do App</h4>
                  <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div className="col-12"></div>

                    <div className="col-12">
                      <Link to="/LoginForm">
                        <button type="submit" className="btn btn-primary">
                          ADD Task
                        </button>
                      </Link>
                    </div>
                  </form>

                  <table className="table mb-4">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Taskname</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((SRlist) => (
                        <>
                          <tr>
                            <th scope="row">{SRlist.title}</th>
                            <td>{SRlist.taskname}</td>
                            <td>{SRlist.description}</td>
                            <td>
                              <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={() => dispatch(deleteList(SRlist._id))}
                              >
                                Delete
                              </button>

                              <Link to={{ pathname: `/Update?${SRlist._id}` }}>
                                <button type="button" class="btn btn-primary">
                                  Update
                                </button>
                              </Link>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
