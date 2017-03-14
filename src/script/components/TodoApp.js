import React, {PropTypes, Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Header from './Header'
import MainSection from './MainSection'
import * as TodoActions from '../actions'


class App extends Component {
  static propTypes =
    {
      todos: PropTypes.array.isRequired,
      actions: PropTypes.object.isRequired
    };

  render() {
    let todos = this.props.todos;
    let actions = this.props.actions;
    return (
      <div>
        <Header addTodo={actions.addTodo}/>
        <MainSection todos={todos} actions={actions}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
