import React from 'react';

import Header from './Components/Header';
import List from './Components/List';
import Form from './Components/Form';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

        this._nextId = this.state.todos.length;

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    nextId() {
        return this._nextId += 1;
    }

    handleAdd(title) {
        const todo = {
            id: this.nextId(),
            title: title,
            completed: false
        };

        const todos = [...this.state.todos, todo];
        this.setState({ todos });
    }

    handleDelete(id) {
        let todos = this.state.todos;
        const index = todos.findIndex(todo => todo.id === id);
        const newTodos = todos.slice(0, index).concat(todos.slice(index + 1));
        this.setState({ newTodos });
    }

    handleToggle(id) {
        const todos = this.state.todos.map(todo => {
            if (todo.id !== id) return todo;
            return {}.assign({}, todo, { completed: !todo.completed });
        });

        this.setState({ todos });
    }

    handleEdit(id, title) {
        const todos = this.state.todos.map(todo => {
            if (todo.id !== id) return todo;
            return {}.assign({}, todo, { title: title });
        });

        this.setState({ todos });
    }


    render() {
        const todos = this.state.todos;
        return (
            <main>
                <Header todos={todos} />
                <List
                    todos={todos}
                    onEdit={this.handleEdit}
                    onDelete={this.handleDelete}
                    onToggle={this.handleToggle}
                />
                <Form onAdd={this.handleAdd} />
            </main>
        );
    }
}

export default App;