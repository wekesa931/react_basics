import React from 'react';
//import classes from '../css/styles.cs';

const NewsItem= ({dailyNew})=>{
    //console.log(props)
    return (
        <div>
            <h3>
                {dailyNew.title}
            </h3>
            <div>
                {dailyNew.feed}
            </div>
        </div>
    )
}
export default NewsItem;

