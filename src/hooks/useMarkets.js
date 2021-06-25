import React, { useState, useEffect } from 'react'
import Http from '../libs/http'

const useMarkets = (coinId) => {
    const [ markets, setMarkets ] = useState([])
    console.log(coinId)
    useEffect( () => {
        (async () => {
            const response = await Http.instance.get(`https://api.coinlore.net/api/coin/markets/?id=${coinId}`)
            setMarkets(response)
            console.log(response)
        })()
    }, [])

    return markets
}

export default useMarkets