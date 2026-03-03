import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        const currencyAPI = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`

        fetch(currencyAPI)
            .then((res) => res.json())
            .then((res) => setData(res[currency])) 
            .catch((err) => console.error("API Error:", err)) 

    }, [currency])

    return data
}

export default useCurrencyInfo