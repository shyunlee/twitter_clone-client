import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './service/auth';
import TweetService from './service/tweet';
import { BrowserRouter } from 'react-router-dom';
import { AuthErrorEventBus, AuthProvider, fetchToken, fetchCsrfToken } from './context/AuthContext';
import HttpClient from './network/http.js';
import Socket from './network/socket.js';

const baseURL=process.env.REACT_APP_BASE_URL;
const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(baseURL, authErrorEventBus, () => fetchCsrfToken())
const socketClient = new Socket(baseURL, () => fetchToken())
const authService = new AuthService(httpClient);
const tweetService = new TweetService(httpClient, socketClient);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        authService={authService}
        authErrorEventBus={authErrorEventBus}
      >
        <App tweetService={tweetService} />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
