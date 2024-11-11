import style from "./ListaEstoque.module.css"

export default function Lista({lista, add, remove}){



    return(
        
        <div className={style.listaEstoque}>
            <h2 > Estoque atual</h2>
            <ul className={style.ul}>
                {lista.map((item, index) =>(
                    <>
                        <li>
                            <p>{item.name} {item.quant}  R${item.valorU}</p>
                            <button onClick={() => add(item.id) }>+</button>
                            <button onClick={() => remove(item.id) } >-</button>
                        </li>
                    
                    
                    </>
                ))}

            </ul>
        </div>
    )
}