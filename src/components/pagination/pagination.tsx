/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import "./pagination.scss";
import axios from "axios";
import cn from "classnames";

interface PaginationProps {
  filter: any;
  setPage: any;
}

export const Pagination: React.FC<PaginationProps> = ({ filter, setPage }) => {
  const [paint, setPaint] = useState<number[]>([]);

  const paintingsLength = () => {
    const apiUrl = "https://test-front.framework.team/paintings";
    axios.get(apiUrl).then((resp) => {
      const length = resp.data.length / 12;

      const pages = [];
      for (let i = 1; i <= Math.round(length); i++) {
        pages.push(i);
      }
      setPaint(pages);
    });
  };

  useEffect(() => {
    paintingsLength();
  }, []);

  const pageIncrement = () => {
    if (filter._page > 1) {
      setPage({ ...filter, _page: filter._page - 1 });
    }
  };

  const pageDecrement = () => {
    if (filter._page < paint.length) {
      setPage({ ...filter, _page: filter._page + 1 });
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => setPage({ ...filter, _page: 1 })}
        className={cn(
          "pagination__item",
          filter._page === 1 && "pagination__item_noactive"
        )}
      >
        &laquo;
      </button>
      <button
        onClick={pageIncrement}
        className={cn(
          "pagination__item",
          filter._page === 1 && "pagination__item_noactive"
        )}
      >
        &#8249;
      </button>
      {paint.map((el: any) => (
        <button
          onClick={() => setPage({ ...filter, _page: el })}
          className={cn(
            "pagination__item",
            filter._page === el && "pagination__item_active"
          )}
          key={el}
        >
          {el}
        </button>
      ))}
      <button
        onClick={pageDecrement}
        className={cn(
          "pagination__item",
          filter._page === paint.length && "pagination__item_noactive"
        )}
      >
        &#8250;
      </button>
      <button
        onClick={() => setPage({ ...filter, _page: paint.length })}
        className={cn(
          "pagination__item",
          filter._page === paint.length && "pagination__item_noactive"
        )}
      >
        &raquo;
      </button>
    </div>
  );
};
