import React, { Component } from 'react';
import NewsItem from './NewsItem';

import axios from 'axios';

// rcc
class NewsItemList extends Component {
    static API_KEY = '833d05a0904c4707837748f283c3cdbb';

    static callGetMethod(url, callback) {
        axios.get(url)
            .then((response) => {
                console.log(`GET ${url}  Request`, response.data);
                callback(response);
            })
            .catch((error) => {
                console.log(`GET ${url}  Error`, error)
            })
            .finally(() => {
                console.log(`GET ${url}  Finally`)
            })
    }

    // rconst
    constructor(props) {
        super(props);

        this.state = {
            articles: []
        }
    }

    // cdm
    componentDidMount() {
        this.getTopHeadlines();
    }


    //cdup
    componentDidUpdate(prevProps, prevState) {
        // 이 조건문이 없을 시, 주기적으로 componentDidUpdate가 호출된다.
        // setState가 호출되니깐...
        if (prevProps.term !== this.props.term) {
            this.getTermSearchNews(this.props.term);
        }
    }

    getTermSearchNews(term) {
        // ES6 Template String
        let apiUrl = `http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${NewsItemList.API_KEY}`;
        if (this.props.term && this.props.term !== '') {
            apiUrl = `http://newsapi.org/v2/everything?q=${this.props.term}&apiKey=${NewsItemList.API_KEY}`;
        }

        NewsItemList.callGetMethod(apiUrl, (response) => {
            this.setState({
                ...this.state,
                articles: response.data.articles
            });
        });
    }

    getTopHeadlines() {
        let apiUrl = `http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${NewsItemList.API_KEY}`;

        NewsItemList.callGetMethod(apiUrl, (response) => {
            this.setState({
                ...this.state,
                articles: response.data.articles
            });
        });
    }

    render() {
        const { articles } = this.state;

        return (
            <div>
                {
                    articles.map((article, index, array) => (<NewsItem key={article.url} article={article} />))
                }
            </div>
        );
    }
}

export default NewsItemList;