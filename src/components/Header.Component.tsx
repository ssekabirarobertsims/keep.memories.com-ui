import { FaSearch } from "react-icons/fa";

function HeaderComponent() {
  return (
    <>
      <header className="application-header">
        <article>
          <h1>Download and save your favorite photos.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam non
            asperiores vel aspernatur, distinctio voluptatum soluta esse ab vero
            corrupti a eligendi eos id dolorum.
          </p>
          <br />
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              window.setTimeout(() => {
                window.location.href = "/filter/searches";
              }, 1000 as number);
            }}
          >
            <FaSearch /> Find in searches
          </button>
        </article>
      </header>
    </>
  );
}

export default HeaderComponent;
