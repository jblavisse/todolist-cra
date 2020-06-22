import React, { Component } from 'react';
import Task from "./Task";

class TaskList extends Component {
    state = {  }
    render() { 
        let tasksList = this.props.tasks.map(task => {
            return <li><Task task={task} /></li>
        })

        return ( 
        <div className="tasklist">
            <ul>{tasksList}</ul>
        </div> 
        );
    }
}
 
export default TaskList;