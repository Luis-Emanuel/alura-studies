import { ITarefa } from "../../../types/tarefas"
import style from "../Lista.module.scss"
export default function Item({tarefa, tempo, selecionadado,completado, id}: ITarefa){
    console.log("item atual: ",{tarefa, tempo, selecionadado,completado, id} )
    return(
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}