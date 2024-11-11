import styles from "./App.module.css";
import { useState } from "react";
import Formulario from "../FormularioProduto/Formulario";
import Lista from "../ListaEstoque/lista"
function App() {
  const [estoques, setEstoque] = useState([]);

  const addEstoque = (nome, quant, valorT, valorU) => {
    const newEstoque = {
      nome,
      quant,
      valorT,
      valorU,
      id: estoques.length + 1,
    };
    setEstoque([...estoques, newEstoque]);
  };
  const removeQuant = (id) => {
    setEstoque(
      estoques.map((estoque) => (estoque.id === id ? {...estoques,quant: estoque.quant - 1} : estoque))
    )

  }
  const addQuant = (id) => {
    setEstoque(
      estoques.map((estoque) => (estoque.id === id ? {...estoques,quant: estoque.quant + 1} : estoque))
    )

  }

  return (
    <>
      <div className={styles.aplicativo}>
        <h1 className={styles.titulo}>Gerenciador </h1>
        <div className={styles.caixa}></div>
        <Formulario addFormulario={addEstoque}></Formulario>
        <Lista lista={estoques} add={addQuant} remove={removeQuant}></Lista>
      </div>
    </>
  );
}

export default App;
