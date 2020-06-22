import React, { Component } from 'react';
import Task from "./Task";

class TodoList extends Component {
    state = { 
        tasks: [
            {
               title: "Faire ma demande à Régine",
               subtasks: [
                   {
                       title: "Me mettre à genoux"
                   },
                   {
                       title: "Ouvrir la boite d'alliance"
                   },
                   {
                       title: "Lui demander si elle veut m'épouser"
                   }
               ]
            },
            {
                title: "Prier pour qu'elle dise oui",
                subtasks: []
            }
        ]
     }
    render() { 
        let tasksList = this.state.tasks.map(task => {
            return <li><Task task={task} /></li>
        })

        return ( 
        <div className="todolist">
            <ul>{tasksList}</ul>
            <div class="alert alert-primary" role="alert">
                A simple primary alert—check it out!
            </div>
        </div> 
        );
    }
}
 
export default TodoList;

