import axios from 'axios'
import axiosRetry from 'axios-retry'

const defaultRetryOption = {
    delayMs: 100,
    retryCount: 3
}

export default class HttpClient {
    constructor (baseURL, authErrorEventBus, getCsrfToken, config = defaultRetryOption) {
        // this.baseURL = baseURL
        this.authErrorEventBus = authErrorEventBus
        this.getCsrfToken = getCsrfToken
        this.client = axios.create({
            baseURL: baseURL,
            headers: {'Content-Type':'application/json'},
            withCredentials: true,
        })
        axiosRetry(this.client, {
            retries: config.retryCount,
            retryDelay: (retry) => {
                const delay = Math.pow(2, retry) * config.delayMs
                const jitter = delay * 0.1 * Math.random()
                return delay + jitter
            },
            retryCondition: (err) => axiosRetry.isNetworkOrIdempotentRequestError(err) || err.response.status === 429
        })
    }

    async fetch (url, options) {
        const {body, method, headers} = options
        const req = {
            url,
            method,
            headers: {
                ...headers,
                '_csrf-token': this.getCsrfToken()
            },
            data: body
        }

        try {
            const res = await this.client(req)
            return res.data
        } catch(error) {
            if (error.response) {
                const data = error.response.data
                const message = 
                    data && data.message ? data.message : 'Something went wrong'
                throw new Error(message)
            }
            throw new Error('connection error')
        }
    }
}

  