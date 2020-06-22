import React, { Component } from 'react';

class Task extends Component {
    state = {  }
    render() { 
        let task = this.props.task;
        let subTasksList = task.subtasks.map(subtask => {
            return <li>{subtask.title}</li>
        })

        return ( 
            <div className="task">
                <p>{task.title}</p>
                <ul>{subTasksList}</ul> 
            </div>
        );
    }
}
 
export default Task;