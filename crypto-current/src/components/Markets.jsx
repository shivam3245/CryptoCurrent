import useAxios from "../hooks/useAxios"
import Coin from "./Coin";
import Skeleton from "./Skeleton";

const Markets = () => {
    const { response, loading } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');

    if (loading) {
        return (
            <div className="wrapper-container mt-8">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-full mt-2" />
                <Skeleton className="h-8 w-full mt-2" />
                <Skeleton className="h-8 w-full mt-2" />
                <Skeleton className="h-8 w-full mt-2" />
                <Skeleton className="h-8 w-full mt-2" />
                <Skeleton className="h-8 w-full mt-2" />
                <Skeleton className="h-8 w-full mt-2" />
            </div>
        )
    }

    return (
        <section name="Markets" className="mt-10 bg-cy">
            <div className="bg-black p-3 mb-2">
                <h1 className="text-2xl  font-serif font-semibold text-white text-center">Markets</h1>
            </div>
            <div className="bg-gray-300">
                {response && response.map(coin => <Coin key={coin.id} coin={coin} />)}
            </div>
        </section>
    )
}

export default Markets