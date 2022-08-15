import axios from "axios";

import { useEffect, useState } from "react";

const LOADPHOTOS = "https://jsonplaceholder.typicode.com/photos?_start=";
const PHOTOS =
  "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=12&";

export default function Photos() {
  const [photos, setPhotos] = useState<any>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(1);
  const [active, setActive] = useState(true);

  useEffect(() => {
    axios.get(PHOTOS).then((res) => {
      setPhotos(res.data);
    });
  }, []);

  const onLoadMore = async () => {
    setCurrentPageIndex((prev: number) => prev + 1);
    if (!isSearching) {
      axios
        .get(`${LOADPHOTOS}${currentPageIndex * 12}&_limit=12&`)
        .then((res) => {
          setPhotos((prev: any) => [...prev, ...res.data]);
        });
    } else {
      axios
        .get(
          `${LOADPHOTOS}${
            currentPageIndex * 12
          }&_limit=12&albumId=${searchString}`
        )
        .then((res) => {
          setPhotos((prev: any) => [...prev, ...res.data]);
        });
    }
  };

  const onSearchId = (e: any) => {
    e.preventDefault();
    setIsSearching(true);
    axios.get(`${PHOTOS}albumId=${searchString}`).then((res) => {
      if (res.data.length === 0) {
        setActive(false);
      } else {
        setActive(true);
        setPhotos(res.data);
      }
    });
  };

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2 className="fw-bold mb-4">Photos</h2>
      <form className="d-flex items-center gap-2 mb-4">
        <select className="form-select">
          <option>Album Id</option>
        </select>
        <input
          className="form-control form-input"
          type="albumID"
          placeholder="Search by album id"
          onChange={(e) => setSearchString(e.target.value)}
        />
        <button type="button" className="btn btn-primary" onClick={onSearchId}>
          Search
        </button>
      </form>
      {active ? (
        <div className="row">
          {photos ? (
            photos.map((photo: any, index: number) => (
              <div key={index} className="col mb-4 col-3">
                <div className="w-100">
                  <div className="card">
                    <img
                      src={photo.thumbnailUrl}
                      alt={photo.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <div className="card-text">
                        <h5 className="w-full text-truncate card-title">
                          {photo.title}
                        </h5>
                        Id: #{photo.id}
                        <br />
                        Album Id: #{photo.albumId}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}

          <div className="row">
            <div className="w-100 text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onLoadMore}
              >
                Load more
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
          <h3 className="h3">No results</h3>
        </div>
      )}
    </main>
  );
}
