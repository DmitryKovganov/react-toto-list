import React from 'react';

function Todo(props) {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.title}</p>
            <p>{props.completed.toString()}</p>
        </div>
    );
}

export default Todo;