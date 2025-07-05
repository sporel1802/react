// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_1FhR1jkbMcfLs42mlb4ro0Rbn82k9LwUaiSiEkSM/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;
import {useEffect, useState} from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    
    useEffect(() => {
        if (!currency) return;
        
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=YOUR_API_KEY`)
            .then((res) => {
                if (!res.ok) throw new Error("Network response was not ok");
                return res.json()
            })
            .then((res) => setData(res[currency]))
            .catch((err) => console.error("Error fetching currency data:", err))
    }, [currency])

    return data
}

export default useCurrencyInfo