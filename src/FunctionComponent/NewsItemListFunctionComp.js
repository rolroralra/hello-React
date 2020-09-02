import React, { useState, useEffect } from 'react'
// import NewsItem from './NewsItem';
import NewsItem from './NewsItemFunctionComp';

import axios from 'axios';

function NewsItemListFunctionComp({ term }) {

    /******************************************
     * How to use Props in Function Component
     ****************************************** 
    // Way1.
    const term = props.term;

    // Way2.
    const { term } = props;

    // Way3.
    Function Parameter Destructoring
    *******************************************/

    /******************************************
     * How to use Props in Function Component  by StateHook
     ******************************************/
    const [articles, setArticles] = useState([]);
    /*******************************************/

    /******************************************
     * How to use Event Handler in Function Component  by EffectHook
     ******************************************/
    // useEffect(() => {
    //     console.log('Rendering Completed!');
    //     getTopHeadlines();
    // }, []);

    // componenetDidMount
    useEffect(() => {
        console.log('Rendering Case 1');
        getTopHeadlines();
    }, []);

    // 특정 값이 변경되었을때, 실행
    useEffect(() => {
        console.log('Rendering Case 2');
        getTermSearchNews(term);
    }, [term]);
    /*******************************************/

    const API_KEY = '833d05a0904c4707837748f283c3cdbb';

    const getTermSearchNews = function (term) {
        // ES6 Template String
        let apiUrl = `http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${API_KEY}`;
        if (term && term !== '') {
            apiUrl = `http://newsapi.org/v2/everything?q=${term}&apiKey=${API_KEY}`;
        }

        axios.get(apiUrl)
            .then((response) => {
                console.log(`GET ${apiUrl}  Request`, response.data);
                setArticles(response.data.articles);
            })
            .catch((error) => {
                console.log(`GET ${apiUrl}  Error`, error)
            })
            .finally(() => {
                console.log(`GET ${apiUrl}  Finally`)
            });
    }

    const getTopHeadlines = function () {
        let apiUrl = `http://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=${API_KEY}`;

        axios.get(apiUrl)
            .then((response) => {
                console.log(`GET ${apiUrl}  Request`, response.data);
                setArticles(response.data.articles);
            })
            .catch((error) => {
                console.log(`GET ${apiUrl}  Error`, error)
            })
            .finally(() => {
                console.log(`GET ${apiUrl}  Finally`)
            });
    }

    return (
        <div>
            {
                articles.map((article, index, array) => (<NewsItem key={article.url} article={article} />))
            }
        </div>
    );
}

export default NewsItemListFunctionComp;
