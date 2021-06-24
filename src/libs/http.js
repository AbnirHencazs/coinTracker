class Http {
    static instance = new Http()

    get = async (url) => {
        try {
            let req = await fetch(url)
            let json = await req.json()
            return json
        } catch (error) {
            console.log('http get method err', error)
            throw Error(error)
        }
    }

    post = (url, body) => {
        try {
            fetch(url, {
                method: 'POST',
                body
            } )
            .then( response => response.json() )
            .then( data => { return data } )
        } catch (error) {
            console.log('http post method error', error)
            throw Error(error)
        }
    }
}

export default Http