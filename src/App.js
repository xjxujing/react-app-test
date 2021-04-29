import { Component } from 'react'
import './App.css';
import Contact from './Contact'
import AddContact from './AddContact'


class App extends Component {

  state = {
    contactList: [
      { name: 'Lucy', age: '15', id: '1' },
      { name: 'Yui', age: '32', id: '2' },
      { name: '花花', age: '60', id: '3' },
    ]
  }
  
  addContact = (contact) => {
    contact.id = Math.random() * 10
    this.setState({
      contactList: [...this.state.contactList, contact]
    })
  }
  render() {
    return (
      <div className="App">
        <Contact name="lulu" contactList={this.state.contactList} />

        <AddContact addContact={this.addContact} />
      </div>
    )
  }

}

export default App;
