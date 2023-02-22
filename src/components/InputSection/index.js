import './index.css'

const InputSection = props => {
  const {itemDetails, isChecked, onDeleteItem} = props
  const {id, websiteInput, passwordInput, username} = itemDetails

  const initial = websiteInput[0].toUpperCase()

  const onClickDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="list-item-container">
      <div className="initial-section">{initial}</div>
      <div className="text-cont">
        <p className="heading">{websiteInput}</p>
        <p className="para">{username}</p>
        {isChecked ? (
          <p className="para">{passwordInput}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <div className="button-count">
        <button
          type="button"
          className="delete-button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default InputSection
