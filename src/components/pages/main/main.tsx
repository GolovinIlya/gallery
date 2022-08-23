/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import Gallery from "../../gallery/gallery";
import { Navbar } from "../../navbar/navbar";
import { FilterSection } from "../../filterSection/filterSection";
import { Pagination } from "../../pagination/pagination";
import "./main.scss";
import axios from "axios";
import qs from "qs";

export const MainPage = () => {
  const [appState, setAppState] = useState<any>(null);
  const [author, setAuthor] = useState<any>(null);
  const [isAuthor, setIsAuthor] = useState<any>("");
  const [locations, setLocations] = useState<any>(null);
  const [isLocations, setIsLocations] = useState<any>("");
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    authorId: null,
    locationId: null,
    name: null,
    _page: 1,
    created_gte: null,
    created_lte: null,
  });

  console.log(appState);

  const filterCards = () => {
    const queryString = qs.stringify(filter, { skipNulls: true });
    const apiUrl = `https://test-front.framework.team/paintings?${queryString}&_limit=12`;
    setLoading(true);
    axios.get(apiUrl).then((resp) => {
      setAppState(resp.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    filterCards();
  }, [filter]);

  const setData = () => {
    const apiAuthors = "https://test-front.framework.team/authors";
    axios.get(apiAuthors).then((resp) => {
      setAuthor(resp.data);
    });

    const apiLocation = "https://test-front.framework.team/locations";
    axios.get(apiLocation).then((resp) => {
      setLocations(resp.data);
    });
  };

  const mergeData = () => {
    let data: any = [];
    if (appState) {
      appState.map((el: any) => {
        author?.forEach((item: any) => {
          if (el.authorId === item.id) {
            el.authorName = item.name;
          }
        });
        locations?.forEach((item: any) => {
          if (el.locationId === item.id) {
            el.locationName = item.location;
          }
        });
        data.push(el);
      });
      setAppState(data);
    }
  };

  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {
    if (!loading) {
      mergeData();
    }
  }, [loading, author]);

  const setSearch = (event: any) => {
    if (event.target.value === "") {
      setSearchName("");
      setFilter({ ...filter, name: null });
    } else {
      setSearchName(event.target.value);
      setFilter({ ...filter, name: event.target.value });
    }
  };

  const setItemAuthor = (el: any) => {
    if (author.find((item: any) => item.id === el)) {
      setIsAuthor(author.find((item: any) => item.id === el).name);
      setFilter({ ...filter, authorId: el });
    } else {
      setIsAuthor(null);
      setFilter({ ...filter, authorId: null });
    }
  };

  const setItemLocation = (el: any) => {
    if (locations.find((item: any) => item.id === el)) {
      setIsLocations(locations.find((item: any) => item.id === el).location);
      setFilter({ ...filter, locationId: el });
    } else {
      setIsLocations(null);
      setFilter({ ...filter, locationId: null });
    }
  };

  return (
    <div className="mainPage">
      <Navbar />
      <FilterSection
        author={author}
        locations={locations}
        value={searchName}
        setSearch={setSearch}
        itemAuthor={setItemAuthor}
        itemLocations={setItemLocation}
        valueAuthor={isAuthor}
        valueLocations={isLocations}
        appState={appState}
        filter={filter}
        setFilter={setFilter}
      />
      <Gallery appState={appState} />
      <Pagination filter={filter} setPage={setFilter} />
    </div>
  );
};
