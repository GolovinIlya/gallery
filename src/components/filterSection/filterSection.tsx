/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";
import "./filterSection.scss";
import { Select } from "../select/select";
import { Input } from "../input/input";

interface FilterSection {
  author: {
    id: Number;
    name: String;
  };
  locations: {
    id: Number;
    name: String;
  };
  value: string;
  setSearch: (event: Event) => void;
  valueAuthor?: string;
  valueLocations?: string;
  itemAuthor?: (el: Number) => void;
  itemLocations?: (el: Number) => void;
  appState?: {
    authorId: Number;
    authorName: String;
    created: String;
    id: Number;
    imageUrl: String;
    locationId: Number;
    name: String;
  };
  filter?: {
    authorId: null;
    created_gte: null;
    created_lte: null;
    locationId: null;
    name: null;
    _page: Number;
  };
  setFilter: any;
}

export const FilterSection: React.FC<FilterSection> = ({
  author,
  locations,
  value,
  setSearch,
  valueAuthor,
  itemAuthor,
  itemLocations,
  valueLocations,
  appState,
  filter,
  setFilter,
}) => {
  const isCreated = true;

  return (
    <div className="selects">
      <Input placeholder="Name" value={value} onChange={setSearch} />
      <Select
        placeholder={"Author"}
        items={author}
        onChange={itemAuthor}
        value={valueAuthor}
      />
      <Select
        placeholder={"Location"}
        items={locations}
        onChange={itemLocations}
        value={valueLocations}
      />
      <Select
        placeholder={"Created"}
        created={isCreated}
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};
