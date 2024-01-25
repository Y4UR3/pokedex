import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import "../components/PokemonPage/PokemonPage.css";

const PokemonPage = () => {
  let { id } = useParams();

  const [pokeid, setPokeid] = useState(id)

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeid}`;
  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [pokeid]);
  
  const handleNext = () => {
    setPokeid((pokemon?.id)+1)
    console.log(pokeid);
  }

  const handlePrev = () => {
    setPokeid((pokemon?.id)-1)
    console.log(pokeid);
  }

  return (
    <div className={` ${pokemon?.types[0].type.name} `}>
      <div>
        <header className="red_recta">
          <div className="black_recta"></div>
          <div className="circlee"></div>
          <img
            className="letters_header"
            src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/436/896/datas/original.png"
            alt=""
          />
        </header>
      </div>
      <div className="poke_info">
        <a className="go-to-list" href="#/pokedex">←</a>
        <article className="card_info">
          <header className="header_card">
            <button className="header-btn_pre" onClick={handlePrev}>←</button>
            <img
              className="img_card"
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
            <button className="header-btn_next" onClick={handleNext}>→</button>
          </header>
          <section className="body_card">
            <div className="general_card">
              <h1 className="general_id"># {pokemon?.id}</h1>
              <hr className="hr_card" />
              <h2 className="name_card">{pokemon?.name}</h2>
              <ul className="we-he_conta">
                <li className="we-he_card">
                  <span className="we-he_title">Weight</span>
                  <span className="we-he_value">{pokemon?.weight}</span>
                </li>
                <li className="we-he_card">
                  <span className="we-he_title">Height</span>
                  <span className="we-he_value">{pokemon?.height}</span>
                </li>
              </ul>
              <ul className="ty-abi_conta">
                <li className="ty-abi">
                  <span className="ty-abi_span">Type</span>
                  <div className="ty-abi_value">
                    {pokemon?.types.map((tipe) => (
                      <div
                        className={`ty_value ${tipe.type.name} `}
                        key={tipe.url}
                      >
                        {tipe.type.name}
                      </div>
                    ))}
                  </div>
                </li>
                <li className="ty-abi">
                  <span className="ty-abi_span">Abilites</span>
                  <div className="ty-abi_value ">
                    {pokemon?.abilities.map((abil) => (
                      <div className="abi_value" key={abil.url}>
                        {abil.ability.name}
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
            <div className="stats_conta">
              <hr className="stats_hr" />
              <h2 className="stats_title">Stats</h2>
              <ul className="stats-conta_info">
                <li className="stats-name_info">
                  <span>HP:</span>
                  <span>{pokemon?.stats["0"].base_stat}/255</span>
                </li>
                <div className="stats-bar">
                  <div className="stats-progres" style={{ width: `${pokemon?.stats["0"].base_stat/255*100}%` }} ></div>
                </div>
                <li className="stats-name_info">
                  <span>ATTACK:</span>
                  <span>{pokemon?.stats["1"].base_stat}/255</span>
                </li>
                <div className="stats-bar">
                  <div className="stats-progres" style={{ width: `${pokemon?.stats["1"].base_stat/255*100}%` }} ></div>
                </div>
                <li className="stats-name_info">
                  <span>DEFENSE:</span>
                  <span>{pokemon?.stats["2"].base_stat}/255</span>
                </li>
                <div className="stats-bar">
                  <div className="stats-progres" style={{ width: `${pokemon?.stats["2"].base_stat/255*100}%` }} ></div>
                </div>
                <li className="stats-name_info">
                  <span>SPECIAL-ATTACK:</span>
                  <span>{pokemon?.stats["3"].base_stat}/255</span>
                </li>
                <div className="stats-bar">
                  <div className="stats-progres" style={{ width: `${pokemon?.stats["3"].base_stat/255*100}%` }} ></div>
                </div>
                <li className="stats-name_info">
                  <span>SPECIAL-DEFENSE:</span>
                  <span>{pokemon?.stats["4"].base_stat}/255</span>
                </li>
                <div className="stats-bar">
                  <div className="stats-progres" style={{ width: `${pokemon?.stats["4"].base_stat/255*100}%` }} ></div>
                </div>
                <li className="stats-name_info">
                  <span>SPEED:</span>
                  <span>{pokemon?.stats["5"].base_stat}/255</span>
                </li>
                <div className="stats-bar">
                  <div className="stats-progres" style={{ width: `${pokemon?.stats["5"].base_stat/255*100}%` }} ></div>
                </div>
              </ul>
            </div>
          </section>
        </article>
        <article className="move_conta">
          <hr className="move_hr"/>
          <h2 className="move_title">Movements</h2>
          <div className="move_conta-name">
          {pokemon?.moves.map((moove) => (
            <p className="move_p" key={moove.url}>{moove.move.name}</p>
          ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default PokemonPage;
