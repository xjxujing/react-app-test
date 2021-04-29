import { Component } from 'react'

class AddContact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      age: null,
      id: null
    }
  }

  submitForm = (e) => {
    e.preventDefault()
    this.setState({
      id: Math.random() * 10
    })
    this.props.addContact(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label htmlFor="name">姓名</label>
          <input type="text" id="name" onChange={this.handleChange}></input>
        </div>

        <div>
          <label htmlFor="age">年龄</label>
          <input type="text" id="age" onChange={this.handleChange}></input>
        </div>

        <input type="submit" value="提交!" />
      </form>
    )
  }
}

export default AddContact
