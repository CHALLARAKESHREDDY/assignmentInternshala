import './index.css'

const UserInput = props => {
  const {onChangeInput} = props

  const ChangeInput = event => {
    onChangeInput(event.target.value)
  }

  return (
    <div className="user-info-container">
      <input
        type="search"
        className="searchInput"
        onChange={ChangeInput}
        placeholder="   Search by author Name"
      />
    </div>
  )
}

export default UserInput