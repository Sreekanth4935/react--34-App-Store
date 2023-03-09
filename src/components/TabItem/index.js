// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTab, tabButtonClicked, isActive} = props
  const {tabId, displayText} = eachTab

  const tabClicked = isActive ? 'button active' : 'button'

  const isTabButtonClicked = () => {
    tabButtonClicked(tabId)
  }

  return (
    <li>
      <button className={tabClicked} type="button" onClick={isTabButtonClicked}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
