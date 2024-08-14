import { Link } from "react-router-dom";
import { TrendingDown, TrendingUp } from "../icons/icons";
import { currencyFormat } from "../utils";

const Coin = ({ coin }) => {
    console.log(coin);
    return (
        <Link to={`/coin/${coin.id}`}>
            <div className=" grid grid-cols-3 sm:grid-cols-4 font-light p-2 mx-2 rounded my-2 bg-[#ede8d0] border-gray-700 border hover:bg-[#c9c5b1]">
                <div className="flex items-center gap-1 w-full p- mb-5 md:mb-2 md:p-5 text:md md:text-xl font-semibold">
                    <img className="w-10 " src={coin.image} alt={coin.name} />
                    <p>{coin.name}</p>
                    <span className="text-xs">({coin.symbol})</span>
                </div>
                <span className="w-full pl-8 text-center font-sans text-blue-800 font-bold"><span className="text-black font-xs font-semibold">current rate</span> {currencyFormat(coin.current_price)}</span>
                <span className={`flex gap-1 pl-7 font-sans font-semibold ${coin.price_change_percentage_24h < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
                    {coin.price_change_percentage_24h}
                    %
                </span>
                <div className=" flex flex-col text-xs pl-2 md:text-lg">
                    <p className="font-semibold">Market Cap</p>
                    <span className="text-black font-normal">{currencyFormat(coin.market_cap)}</span>
                </div>
            </div>
        </Link>
    )
}

export default Coin