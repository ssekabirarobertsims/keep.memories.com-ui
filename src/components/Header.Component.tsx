// import { FaSearch } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

interface ListItem {
  id: string;
  value: string;
  link: string;
}

const HeaderComponent: React.FC = () => {
  const [value, setValue] = React.useState<string>("" as string);
  const [filteredList, setFilteredList] = React.useState([] as ListItem[]);
  const [list, setList] = React.useState([
    {
      id: uuid() as string,
      value: "Photos From Nature",
      link: "/photos/categories/nature",
    },
    {
      id: uuid() as string,
      value: "Dark Photos & Wallpapers",
      link: "/photos/categories/dark-photos",
    },
    {
      id: uuid() as string,
      value: "Photos From Different Animals",
      link: "/photos/categories/animals",
    },
    {
      id: uuid() as string,
      value: "Photos From Technology",
      link: "/photos/categories/technology",
    },
    {
      id: uuid() as string,
      value: "Photos From Beautiful Natural Sceneries",
      link: "/photos/categories/nature",
    },
    {
      id: uuid() as string,
      value: "All Photos In Gallery",
      link: "/photos/categories/all",
    },
    {
      id: uuid() as string,
      value: "Technology Photos Of Your Choice",
      link: "/photos/categories/technology",
    },
    {
      id: uuid() as string,
      value: "Illustrations Photos",
      link: "/photos/categories/Illustrations",
    },
    {
      id: uuid() as string,
      value: "Beautiful Photos From Different Animal Species",
      link: "/photos/categories/animals",
    },
    {
      id: uuid() as string,
      value: "Inspiring Dark Photos & Wallpapers In Collection",
      link: "/photos/categories/dark-photos",
    },
    {
      id: uuid() as string,
      value: "Photos From People",
      link: "/photos/categories/people",
    },
    {
      id: uuid() as string,
      value: "Photo Collection From Our Gallery",
      link: "/photos/categories/all",
    },
    {
      id: uuid() as string,
      value: "Photos From Groups Of People",
      link: "/photos/categories/people",
    },
    {
      id: uuid() as string,
      value: "Photos From Illustrations And Art",
      link: "/photos/categories/Illustrations",
    },
  ] as ListItem[]);

  return (
    <>
      <header className="application-header">
        <article>
          <h1>Download and save your favorite photos.</h1>
          <p>
            Free and simple application that allows you to download and save
            photos from the internet. You can search for photos by category or
            by searching for a specific photo using the search bar to search and
            find your favorite photos.
          </p>
          <input
            type="search"
            name="search-bar"
            id="search-bar"
            placeholder="search by categories"
            aria-placeholder="search by categories"
            onInput={(event) => {
              event.stopPropagation();
              setValue((event.target as HTMLInputElement).value as string);
              (
                window.document.querySelector(
                  ".search-list"
                ) as HTMLUListElement
              ).style.display = "flex";

              setList(list);

              if (
                list.length < 1 ||
                (event.target as HTMLInputElement).value === "" ||
                filteredList.length < 1
              ) {
                setFilteredList([
                  {
                    id: uuid() as string,
                    value: `No Search Results Found For '${
                      (event.target as HTMLInputElement).value
                    }'`,
                    link: "",
                  },
                ]);
              } else {
                setFilteredList(
                  list.filter((index: ListItem) => {
                    return index.value
                      .toLowerCase()
                      .includes(
                        (event.target as HTMLInputElement).value.toLowerCase()
                      );
                  })
                );
              }
            }}
            value={value}
          />
        </article>
        <ul className="search-list">
          {filteredList.length > 0
            ? filteredList.map((index: ListItem) => (
                <Link
                  to={{
                    pathname: index.link,
                  }}
                  key={index.id as string}
                >
                  <li>{index.value}</li>
                </Link>
              ))
            : ""}
        </ul>
      </header>
    </>
  );
};

export default HeaderComponent;
