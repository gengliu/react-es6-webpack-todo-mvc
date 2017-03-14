import React, {Component} from 'react';
const ENTER_KEY = 13;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    }
  }

  componentWillMount() {

  }

  handleChange = (event) => {
    this.setState({newTodo: event.target.value});
  };

  // handleNewTodoKeyDown(event) {
  //     if (event.keyCode !== ENTER_KEY) {
  //         return;
  //     }
  //     event.preventDefault();
  //
  //     var val = this.state.newTodo.trim();
  //
  //     if (val) {
  //         this.props.model.addTodo(val);
  //         this.setState({newTodo: ''});
  //     }
  // }


  render() {
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.newTodo}
            onChange={this.handleChange.bind(this)}
            autoFocus={true}
          />
        </header>
      </div>
    );
  }
}

export default App;
