export default class HttpClient {
    constructor (baseURL, authErrorEventBus, getCsrfToken) {
        this.baseURL = baseURL
        this.authErrorEventBus = authErrorEventBus
        this.getCsrfToken = getCsrfToken
    }

    async fetch (url, options) {
        const response = await fetch(`${this.baseURL}${url}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
                '_csrf-token': this.getCsrfToken()
            },
            credentials: 'include'
        })
        let data;
        try {
            data = await response.json()
        } catch (error) {
            console.log('ERROR', error)
        }

        if (response.status > 299 || response.status < 200) {
            const message = 
                data && data.message ? data.message : 'something went wrong'
            const error = new Error(message)
            if (response.status === 401) {
                this.authErrorEventBus.notify(error)
                return
            }
            throw error
        }

        return data
    }
}

  