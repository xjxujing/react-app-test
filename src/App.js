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
    const contactList = this.state.contactList.slice()
    contactList.push(contact)
    this.setState({
      contactList: contactList
    })
  }

  deleteContact = (id) => {
    const contactList = this.state.contactList.filter(item => {
      return item.id !== id
    })
    this.setState({
      contactList: contactList
    })
  }
  render() {
    return (
      <div className="App">
        <Contact name="lulu" contactList={this.state.contactList} deleteContact={this.deleteContact} />

        <AddContact addContact={this.addContact} />
      </div>
    )
  }

}

export default App;
