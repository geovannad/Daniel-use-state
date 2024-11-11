import style from "./FormularioProduto.module.css";
import { useState } from "react";

export default function Formulario({ addFormulario }) {
  const [nome, setnome] = useState("");
  const [quant, setquant] = useState(0);
  const [valorT, setValort] = useState(0);
  const [valorU, setvaloru] = useState(0);
  return (
    <>
      <div className={style.formulario}>
        <input
          defaultValue="Nome do produto"
          onChange={(e) => setnome(e.target.value)}
          className={style.input}
          type="text"
        />
        <input
          defaultValue="Quatidade do produto"
          onChange={(e) => setquant(e.target.value)}
          className={style.input}
          type="text"
        />
        <input
          defaultValue="valor de compra"
          onChange={(e) => setValort(e.target.value)}
          className={style.input}
          type="text"
        />
        <input
          defaultValue="Valor de venda"
          onChange={(e) => setvaloru(e.target.value)}
          className={style.input}
          type="text"
        />
        <button
          onClick={() => addFormulario(nome, quant, valorT, valorU)}
          className={style.botao}
        >
          Adicionar Produto
        </button>
      </div>
    </>
  );
}
