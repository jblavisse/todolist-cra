import React, { Component } from 'react';

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

class TodoList extends Component {
    state = {
        tasks: [
            {
               title: "Faire ma demande à Régine",
            },
            {
                title: "Prier pour qu'elle dise oui",
            }
        ]
     }

     addTask = (task) =>  {
         console.log(task);
         let newTask = {
             title: task
         }
         this.setState({
             tasks: [...this.state.tasks, newTask]
         })
     }

    render() { 

        return ( 
        <div className="todolist">
            <TaskForm addTask={this.addTask} />
            <TaskList tasks={this.state.tasks} />
        </div> 
        );
    }
}
 
export default TodoList;

