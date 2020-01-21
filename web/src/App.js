import React, { useEffect } from "react";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
//Componente: bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
//Propriedade: Informações que um componente PAI passa para o componente FILHO.
//Estado: Informaçoes mantidas pelo componente(Lembrar Imutabilidade.)

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="githut_username">Usúario do Github</label>
            <input name="githut_username" id="username_github" required />
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitute" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/49644607?s=460&v=4"
                alt="David Martini"
              />
              <div className="user-info">
                <strong>David Martini</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
