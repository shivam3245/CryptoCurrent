import useAxios from "../hooks/useAxios";
import Coin3DModel from "./Coin3DModel";
import CoinTrending from "./CoinTrending";
import CryptoProfitCalculator from "./CryptoCalc";
import Graphimg from "./Graphimg";
import Skeleton from "./Skeleton";

const Trending = () => {
    const { response, loading } = useAxios('search/trending');

    if (loading) {
        return (
            <div className="wrapper-container mt-8">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-full mt-2" />
                <Skeleton className="h-8 w-full mt-2" />
                <Skeleton className="h-8 w-full mt-2" />
                <Skeleton className="h-8 w-full mt-2" />
            </div>
        );
    }

    return (
        <div>
            <div className="h-full max-w-full">
                <Coin3DModel />
                <Graphimg />
            </div>
            <div name='Trending' >
                <div className="mt-0">
                    <h1 className="text-md md:text-2xl font-serif font-semibold mb-2 text-center bg-gray-800 p-3 text-white">Trending Coins</h1>
                    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        {response && response.coins.map(coin => (
                            <CoinTrending key={coin.item.coin_id} coin={coin.item} />
                        ))}
                    </div>
                    <CryptoProfitCalculator />
                </div>
            </div>
        </div>
    );
}

export default Trending;
