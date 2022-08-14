import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableAlbum from "../TableAlbums/TableAlbum";

const UserInfo = () => {
  const [users, setUsers] = useState<any>([]);

  const { userId } = useParams();
  const USERS = `https://jsonplaceholder.typicode.com/users/${userId}`;

  useEffect(() => {
    axios.get(USERS).then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <>
      <div className="py-2 container">
        <div className="mb-4 row">
          <div className="col-12">
            <div className="mb-4 row">
              <div className="col-6">
                <h2 className="h2 fw-bold">{users.name}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex flex-column gap-4">
                  <div className="row">
                    <div className="col-12">
                      <h4 className="h4 text-info">Personal:</h4>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <p className="mb-0">Id:</p>
                        </div>
                        <div className="col-lg-9 col-8">
                          <p className="mb-0 fw-bold">{users.id}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <p className="mb-0">Username:</p>
                        </div>
                        <div className="col-lg-9 col-8">
                          <p className="mb-0 fw-bold">{users.username}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <h4 className="h4 text-info">Address:</h4>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <p className="mb-0">Street:</p>
                        </div>
                        <div className="col-lg-9 col-8">
                          <p className="mb-0 fw-bold">
                            {users.address?.street}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <p className="mb-0">Suite:</p>
                        </div>
                        <div className="col-lg-9 col-8">
                          <p className="mb-0 fw-bold">{users.address?.suite}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <p className="mb-0">City:</p>
                        </div>
                        <div className="col-lg-9 col-8">
                          <p className="mb-0 fw-bold">{users.address?.city}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <p className="mb-0">Zipcode:</p>
                        </div>
                        <div className="col-lg-9 col-8">
                          <p className="mb-0 fw-bold">
                            {users.address?.zipcode}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <h4 className="h4 text-info">Company:</h4>
                    </div>
                    <div className="col-12">
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <p className="mb-0">Name:</p>
                        </div>
                        <div className="col-lg-9 col-8">
                          <p className="mb-0 fw-bold">{users.company?.name}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <p className="mb-0">CatchPhrase:</p>
                        </div>
                        <div className="col-lg-9 col-8">
                          <p className="mb-0 fw-bold">
                            {users.company?.catchPhrase}
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-4">
                          <p className="mb-0">Bs:</p>
                        </div>
                        <div className="col-lg-9 col-8">
                          <p className="mb-0 fw-bold">{users.company?.bs}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-6">
                    <div className="d-flex items-center justify-content-between">
                      <h4 className="h4 text-info">Contact:</h4>
                    </div>
                  </div>
                  <div className="mb-2 col-12">
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Email:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">{users.email}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Website:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">{users.website}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-4">
                        <p className="mb-0">Phone:</p>
                      </div>
                      <div className="col-lg-9 col-8">
                        <p className="mb-0 fw-bold">{users.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="button" className="btn btn-success">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TableAlbum userId={userId} />
      </div>
    </>
  );
};

export default UserInfo;
