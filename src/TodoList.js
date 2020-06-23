import React, { Component } from 'react';

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';


class TodoList extends Component {
    state = {
        tasks: []
     }

     componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            console.log(res.data);
            this.setState({
                tasks: res.data
            })
        })
     }

     addTask = (task) =>  {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title: task,
            completed: false,
            userId: 1
        })
        .then(res => {
            this.setState({
                tasks: [...this.state.tasks, res.data]
            })
        })
     }

     deleteTask = (id) => {
        axios.delete('https://jsonplaceholder.typicode.com/todos/' + id)
        .then(res => {
            let tasks = this.state.tasks.filter(task => task.id !== id);
            this.setState({
               tasks: tasks
            })
        })
     }

    render() { 

        return ( 
        <div className="todolist">
            <TaskForm addTask={this.addTask} />
            <TaskList tasks={this.state.tasks}
            deleteTask={this.deleteTask} />
        </div> 
        );
    }
}
 
export default TodoList;

