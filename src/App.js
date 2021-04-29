import { Component } from 'react'
import './App.css';
import Contact from './Contact'


class App extends Component {
  
  state = {
    contactList: [
      {name: 'Lucy', sex: '女', id: '1'},
      {name: 'Yui', sex: '女', id: '2'},
      {name: '花花', sex: '男', id: '3'},
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
        </header>

        <Contact name="lulu" contactList={this.state.contactList} />
      </div>
    )
  }

}

export default App;
