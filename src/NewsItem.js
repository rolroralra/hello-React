import React, { Component } from 'react';

// rcc
class NewsItem extends Component {
    render() {
        // Destructuring
        // let obj = {a:1, b:2, c:3}
        // const {a, b, c} = obj;
        const { article } = this.props;

        return (
            <li className="list-group-item">
                <div className="media">
                    {article.urlToImage && <img src={article.urlToImage} alt='None' className="w-25 p-2" />}
                    <div className="media-body p-2">
                        <h5 className="mt-0">
                            <a href={article.url}>{article.title}</a>
                        </h5>
                        {article.description}
                    </div>
                </div>
            </li>
        );
    }
}

export default NewsItem;