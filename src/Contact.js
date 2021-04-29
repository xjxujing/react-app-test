import { Component } from 'react'


class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  render() {
    console.log(this.props)
    const {contactList} = this.props
    console.log('contactList', contactList)

    const tempList = contactList.map(contact => {
      return (
        <h3 key={contact.id}>{contact.name}</h3>
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