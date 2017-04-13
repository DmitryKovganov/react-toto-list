import {connect} from 'react-redux';

import {deleteTodo, editTodo, toggleTodo} from '../actions';
import List from '../Components/List';

function mapStateToProps(state) {
    return {
        todos: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onDelete: id => dispatch(deleteTodo(id)),
        onEdit: (id, title) => dispatch(editTodo(id, title)),
        onToggle: id => dispatch(toggleTodo(id))
    };
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;