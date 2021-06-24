import React, { useState, useEffect } from 'react'
import Http from '../libs/http'

const useCoins = () => {
    const [ coins, setCoins ] = useState([])

    useEffect( () => {
        (async () => {
            const response = await Http.instance.get("https://api.coinlore.net/api/tickers")
            setCoins(response.data)
            console.log(response.data)
        })()
    }, [])

    return [coins]
}

export default useCoins