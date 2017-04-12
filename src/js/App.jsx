import React from 'react';

import Header from './Components/Header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.initialData
        };
    }

    render() {
        return (
            <main>
                <Header todos={this.state.todos} />
            </main>
        );
    }
}

export default App;