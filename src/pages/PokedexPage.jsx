import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import "../components/PokedexPage/styles/PokedexPage.css";


const PokedexPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [typeSelected, setTypeSelected] = useState("allPokemon");

  const trainerName = useSelector((states) => states.trainer);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
  const [pokemons, getPokemons, getTypePokemos] = useFetch(url);

  const [pokemonsForPage, setPokemonsForPage] = useState(12) 
  const [currentPage, setCurrentPage] = useState(1)


  const lastIndex = currentPage * pokemonsForPage;
  const firstIndex = lastIndex - pokemonsForPage;

  useEffect(() => {
    if (typeSelected === "allPokemons") {
      getPokemons();
    } else {
      getTypePokemos(typeSelected);
    }
    getPokemons();
  }, [typeSelected]);

  const inputName = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(inputName.current.value.trim().toLowerCase());
  };

  const cbFilter = (pokeInfo) =>
    pokeInfo.name.toLowerCase().includes(inputValue);

  return (
    <div>
      <div className="recta_list">
        <header className="red_recta">
          <div className="black_recta"></div>
          <div className="circlee"></div>
          <img
            className="letters_header"
            src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/436/896/datas/original.png"
            alt=""
          />
        </header>

        <aside className="aside_conta">
          <h2 className="title_form">
            <span className="span_name">{`Welcome ${trainerName}`}</span>,here
            you can find your favorite pokemon
          </h2>
          <form className="form_conta" onSubmit={handleSearch}>
            <div className="form_div">
              <input
                className="form_input"
                placeholder="Search pokemon by name"
                ref={inputName}
                type="text"
              />
              <button className="form_btn">Search</button>
            </div>
            <SelectType setTypeSelected={setTypeSelected} />
          </form>
        </aside>
        <div className="page-conta">
          
        </div>
        <div className="card_conta">
          <div className="card_pokemon">
            {
              pokemons?.results.filter(cbFilter).map((pokeInfo) => (
              <PokeCard 
                key={pokeInfo.url} 
                url={pokeInfo.url} 
              />
              ))
            } 
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexPage;
