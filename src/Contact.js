import { Component } from 'react'


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  render() {
    const { contactList } = this.props

    const tempList = contactList.map(contact => {
      return (
        <h6 key={contact.id}>
          <span>{contact.name}</span>
          <span> | </span>
          <span>{contact.age} years old</span>
        </h6>
      )
    })

    return (
      <div>
        {tempList}
      </div>
    )
  }
}

export default Contact