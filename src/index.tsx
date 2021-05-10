import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {App} from './delivery/App'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'
import {GetNews} from './domain/usecase/GetNews'
import {HttpNewsApi} from './infrastructure/HttpNewsApi'

const searchApi = axios.create({
    baseURL: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api',
    headers: {
        'x-rapidapi-key': process.env.REACT_APP_SEARCH_API_KEY,
        'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    },
})

const getNews = new GetNews(new HttpNewsApi(searchApi))

ReactDOM.render(
    <React.StrictMode>
        <App searchNews={getNews.search}/>
    </React.StrictMode>,
    document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
