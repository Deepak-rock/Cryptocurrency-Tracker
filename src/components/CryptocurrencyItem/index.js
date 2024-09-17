// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {itemDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = itemDetails
  return (
    <li className="item-content">
      <div className="type-img-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="type">{currencyName}</p>
      </div>
      <div className="currency-details-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
