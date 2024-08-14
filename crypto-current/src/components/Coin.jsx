import { Link } from "react-router-dom";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { currencyFormat } from "../utils";

const convertToINR = (usd) => {
    const exchangeRate = 84; // Example exchange rate: 1 USD = 74 INR (You should replace this with the current exchange rate)
    return usd * exchangeRate;
}

const inrFormat = (amount) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount).replace('₹', ''); // Removes the INR symbol
}

const Coin = ({ coin }) => {
    return (
        <Link to={`/coin/${coin.id}`}>
            <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 mx-2 rounded my-2 bg-[#ede8d0] border-gray-700 border hover:bg-[#c9c5b1]">
                <div className="flex items-center gap-1 w-full p- mb-5 md:mb-2 md:p-5 text:md md:text-xl font-semibold">
                    <img className="w-10" src={coin.image} alt={coin.name} />
                    <p>{coin.name}</p>
                    <span className="text-xs">({coin.symbol})</span>
                </div>
                <div className="flex flex-col items-center w-full pl-8  font-sans text-blue-800 font-bold">
                    <span className="text-black font-xs font-semibold">Current Rate</span>
                    <span>{currencyFormat(coin.current_price)}</span>
                    <span className="text-black text-xs font-semibold">INR</span>
                    <span className="text-xs">{inrFormat(convertToINR(coin.current_price))}</span>
                </div>
                <span className={`flex gap-1 pl-7 font-sans font-semibold ${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                    {coin.price_change_percentage_24h}%
                </span>
                <div className="flex flex-col text-xs pl-2 md:text-lg">
                    <p className="font-semibold">Market Cap</p>
                    <span className="text-black font-normal">{currencyFormat(coin.market_cap)}</span>
                </div>
            </div>
        </Link>
    );
}

export default Coin;
