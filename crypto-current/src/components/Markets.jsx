import { useState } from "react";
import useAxios from "../hooks/useAxios";
import Coin from "./Coin";
import Skeleton from "./Skeleton";

const Markets = () => {
    const { response, loading } = useAxios('coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const [search, setSearch] = useState("");

    // Filter coins based on the search query
    const filteredCoins = response ? response.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    ) : [];

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
        );
    }

    return (
        <section name="Markets" className="mt-2 bg-cy">
            <div className="bg-gray-800 p-3 mb-2">
                <h1 className="text-md md:text-2xl font-serif font-semibold text-white text-center">Markets</h1>
            </div>

            {/* Search Bar */}
            <div className="mb-2 flex justify-center">
                <input
                    type="text"
                    placeholder="Search Coin"
                    className="w-1/3 p-2 border border-gray-700 rounded-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div>
                {filteredCoins.length > 0 ? (
                    filteredCoins.map(coin => <Coin key={coin.id} coin={coin} />)
                ) : (
                    <p className="text-center text-gray-500">No coins found</p>
                )}
            </div>
        </section>
    );
};

export default Markets;
