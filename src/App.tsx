import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
interface EmpresaObject {
  priceLMS: number;
  priceContenido: number;
  priceEngagement: number;
  pricePerformance: number;
}

function App() {
  const [preciosBaseEmpresa, setPreciosBaseEmpresa] = useState<EmpresaObject>();

  function selectEmpresa(event: React.FormEvent<HTMLSelectElement>): void {
    if(event.currentTarget.value === "Small Business"){
      setPreciosBaseEmpresa({
        priceLMS: 54,
        priceContenido: 100,
        priceEngagement: 31,
        pricePerformance: 41,
      });
    }
    else{
      setPreciosBaseEmpresa({
        priceLMS: 69,
        priceContenido: 115,
        priceEngagement: 31,
        pricePerformance: 41,
      });
    }
    console.log(preciosBaseEmpresa)
  }
  return (
    <div className="App">
      <div className="App-header">
        <div className="boxDropdownInput">
          <div className="dropdownInput">
            <h1>Empresa</h1>
            <select
              className="combo-box"
              name="select"
              onClick={selectEmpresa}
            >
              <option disabled selected>
                Seleccionar
              </option>
              <option value="value1">Small Business</option>
              <option value="value2">Mid Market o Enterprise</option>
            </select>
          </div>
          <div className="dropdownInput">
            <h1>Cantidad Persona</h1>

            <select className="combo-box" name="select">
              <option disabled selected>
                Seleccionar
              </option>
              <option value="value1">Small Business</option>
              <option value="value2">Mid Market o Enterprise</option>
            </select>
          </div>
          <div className="dropdownInput">
            <h1>Tiempo</h1>

            <select className="combo-box" name="select">
              <option disabled selected>
                Seleccionar
              </option>
              <option value="value1">Small Business</option>
              <option value="value2">Mid Market o Enterprise</option>
            </select>
          </div>
        </div>
        <div className="boxCheckboxInputs">
          <div className="checkboxStyle">
            <input type="checkbox" />
            <label> LMS </label>
          </div>
          <div className="checkboxStyle">
            <input type="checkbox" />
            <label> Contenido </label>
          </div>
          <div className="checkboxStyle">
            <input type="checkbox" />
            <label> Engagement </label>
          </div>
          <div className="checkboxStyle">
            <input type="checkbox" />
            <label> Performance </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
