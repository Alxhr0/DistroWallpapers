import React, { useState, useEffect } from "react";
import axios from "axios";

export default function WallLoad(Props) {
  const [books, setBooks] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(Props.api);
      setBooks(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="row">
        {books &&
          books.map((book, index) => {
            return (
              <div className="col col--4 margin-bottom--lg" key={index}>
                <div className="card">
                  <div className="card__image">
                    <img
                      src={book.download_url}
                      alt={book.name}
                      title={book.name}
                    />
                  </div>
                  <div className="card__footer button-group button-group--block">
                    <a
                      className="button button--primary"
                      href={book.html_url}
                      target="_blank"
                    >
                      GitHub
                    </a>
                    <a
                      className="button button--primary"
                      href={book.download_url}
                      target="_blank"
                      download
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
