import React from "react";
import style from "./Lista.module.scss";
function Lista(){
    const tarefas = [{
        tarefa:"Java",
        tempo: "01:10:00"
    },{
        tarefa:"php",
        tempo: "03:10:00"
    },{
        tarefa:"react",
        tempo: "01:30:00"
    },{
        tarefa:"Git",
        tempo: "02:10:00"
    }]
    return(
        <aside className={style.listaTarefas}>
            <h2>Tarefas do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index} className={style.item}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;