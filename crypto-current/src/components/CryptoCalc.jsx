import React, { useState } from 'react';

const CryptoProfitCalculator = () => {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [cryptoQuantity, setCryptoQuantity] = useState('');
    const [buyingPrice, setBuyingPrice] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [fees, setFees] = useState('');
    const [profit, setProfit] = useState(null);

    const calculateProfit = () => {
        const investment = parseFloat(initialInvestment);
        const quantity = parseFloat(cryptoQuantity);
        const buyPrice = parseFloat(buyingPrice);
        const sellPrice = parseFloat(sellingPrice);
        const fee = parseFloat(fees);

        if (!isNaN(investment) && !isNaN(quantity) && !isNaN(buyPrice) && !isNaN(sellPrice) && !isNaN(fee)) {
            const totalCost = investment + fee;
            const totalRevenue = quantity * sellPrice;
            const profitAmount = totalRevenue - totalCost;
            setProfit(profitAmount);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center rounded-3xl md:h-1/2 mx-4 md:mx-[35%] p-8 my-5 md:my-10 bg-black text-white">
            <h1 className="text-3xl font-bold mb-6 text-white">Crypto Profit Calculator</h1>
            <div className="flex flex-col gap-4 w-full max-w-md">
                <input
                    type="number"
                    placeholder="Initial Investment ($)"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(e.target.value)}
                    className="p-2 rounded bg-gray-800 text-white"
                />
                <input
                    type="number"
                    placeholder="Quantity of Crypto"
                    value={cryptoQuantity}
                    onChange={(e) => setCryptoQuantity(e.target.value)}
                    className="p-2 rounded bg-gray-800 text-white"
                />
                <input
                    type="number"
                    placeholder="Buying Price per Unit ($)"
                    value={buyingPrice}
                    onChange={(e) => setBuyingPrice(e.target.value)}
                    className="p-2 rounded bg-gray-800 text-white"
                />
                <input
                    type="number"
                    placeholder="Selling Price per Unit ($)"
                    value={sellingPrice}
                    onChange={(e) => setSellingPrice(e.target.value)}
                    className="p-2 rounded bg-gray-800 text-white"
                />
                <input
                    type="number"
                    placeholder="Fees ($)"
                    value={fees}
                    onChange={(e) => setFees(e.target.value)}
                    className="p-2 rounded bg-gray-800 text-white"
                />
                <button
                    onClick={calculateProfit}
                    className="p-2 rounded bg-yellow-500 hover:bg-yellow-600 text-black font-bold transition duration-300"
                >
                    Calculate Profit
                </button>
                {profit !== null && (
                    <div className="mt-4 text-xl">
                        {profit >= 0 ? `Profit: $${profit.toFixed(2)}` : `Loss: $${Math.abs(profit).toFixed(2)}`}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CryptoProfitCalculator;
