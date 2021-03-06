import React from 'react';

import Stats from './Stats';

function Header(props) {
    return (
        <header>
            <Stats todos={props.todos}/>
            <h1>React-redux Todo</h1>
        </header>
    );
}

Header.propTypes = {
    todos: React.PropTypes.array.isRequired
};

export default Header;