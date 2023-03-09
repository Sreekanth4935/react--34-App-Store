// Write your code here
import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl, tabId} = eachApp
  // category appId
  return (
    <li key={tabId} className="list-items">
      <img className="image" src={imageUrl} alt={appName} />
      <p className="heading">{appName}</p>
    </li>
  )
}

export default AppItem
