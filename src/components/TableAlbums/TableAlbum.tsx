import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TableAlbum = (props: any) => {
  const [albums, setAlbums] = useState<any>([]);
  const [inputAlbums, setInputAlbums] = useState<string>("");

  const { userId } = useParams();
  const ALBUMS = `https://jsonplaceholder.typicode.com/users/${userId}/albums`;
  const ALBUM_URL = " https://jsonplaceholder.typicode.com/albums";

  useEffect(() => {
    axios.get(ALBUMS).then((res) => {
      setAlbums(res.data);
    });
  }, [ALBUMS]);

  const handleClickDelete = (id: number) => {
    axios.delete(`${ALBUM_URL}/${id}`).then((res) => {
      setAlbums(albums.filter((album: any) => album.id !== id));
    });
  };

  const HandleClickAdd = async (e: any) => {
    e.preventDefault();
    const newAlbums = [
      ...albums,
      { id: albums.length + 1, title: inputAlbums },
    ];
    const res = await axios.post(ALBUMS, { newAlbums });
    if (res.status === 200 || res.status === 201) {
      setAlbums(newAlbums);
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="border-top pt-3 mb-3 row">
            <div className="col-8">
              <h4 className="h4">Photo Albums: </h4>
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-6">
              <form className="d-flex items-center gap-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title of new album"
                  onChange={(e) => setInputAlbums(e.target.value)}
                />
                <button
                  type="submit"
                  className="flex-shrink-0 w-25 btn btn-success btn-lg"
                  onClick={HandleClickAdd}
                >
                  New Album
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {albums.map((album: any, index: number) => (
          <div className="mb-3 col-md-6" key={album.id}>
            <div className="d-flex items-center justify-content-between border rounded text-decoration-none text-black ">
              <div
                className="py-2 flex-shrink-0 border-end d-flex items-center justify-content-center"
                style={{ width: "10%" }}
              >
                {index + 1}
              </div>
              <div className="py-2 w-100 px-4 text-truncate fw-bold text-start">
                {album?.title}
              </div>
              <div
                className="text-center flex-shrink-0 py-2"
                style={{ width: "10%" }}
              >
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleClickDelete(album?.id)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableAlbum;
