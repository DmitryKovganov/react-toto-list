import React from 'react';

function Stats(props) {
    return (
        <span>Количество тасков: {props.todos.length}</span>
    );
}

export default Stats;