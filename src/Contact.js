const Contact = (props) => {
  const { contactList, deleteContact } = props

  const tempList = contactList.map(contact => {
    return (
      <div key={contact.id}>
        <span >
          <span>{contact.name}</span>
          <span> | </span>
          <span>{contact.age} years old</span>
        </span>
        <span> | </span>
        <button onClick={() => deleteContact(contact.id)}>删除</button>
      </div>
    )
  })

  return (
    <div>
      {tempList}
    </div>
  )

}


export default Contact