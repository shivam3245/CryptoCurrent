import { Link } from "react-router-dom";

const CoinTrending = ({ coin }) => {
    return (
        <Link to={`/coin/${coin.id}`}>
            <div className="bg-white hover:bg-blue-300 shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-700 text-lg">{coin.score + 1}.</span>
                    <img className="w-10 h-10 rounded-full border border-gray-200" src={coin.small} alt={coin.name} />
                    <div>
                        <p className="text-gray-900 font-medium">{coin.name}</p>
                        <small className="text-gray-500 uppercase">({coin.symbol})</small>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CoinTrending;
