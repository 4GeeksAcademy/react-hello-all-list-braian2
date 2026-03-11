import React, { useState } from "react";

function List() {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([]);

  const agregarOpcion = () => {
    const valor = inputValue.trim();
    if (!valor) return;

    setOptions((prev) => [...prev, valor]);
    setInputValue("");
  };

  const eliminarOpcion = (index) => {
    setOptions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-3">

      <input
        className="form-control"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe algo"
      />

      <button
        className="btn btn-primary mt-2"
        onClick={agregarOpcion}
      >
        Guardar
      </button>

      <ul className="list-group mt-3">
        {options.map((opcion, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {opcion}

            <button
              className="btn btn-danger btn-sm"
              onClick={() => eliminarOpcion(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default List;