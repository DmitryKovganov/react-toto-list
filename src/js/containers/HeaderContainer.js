import {connect} from 'react-redux';

import Header from '../Components/Header';

function mapStateToProps(state) {
    return {
        todos: state
    };
}

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;

