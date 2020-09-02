import React from 'react';

function NewsItemFunctionComp({ article }) {
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
    )
}

export default NewsItemFunctionComp;