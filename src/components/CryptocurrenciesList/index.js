// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptocurrenciesList} = props
  return (
    <div className="cryptocurrencies-app-container">
      <h1 className="heading"> Cryptocurrency Tracker</h1>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div className="list-container">
        <ul className="table-header">
          <li className="header-item">
            <p className="header">Coin Type</p>
          </li>
          <li className="header-item-currency">
            <p className="header">USD</p>
            <p className="header">EURO</p>
          </li>
        </ul>
        <ul className="cryptocurrency-list">
          {cryptocurrenciesList.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} itemDetails={eachItem} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CryptocurrenciesList
