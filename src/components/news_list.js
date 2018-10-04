import React from 'react';
import NewsItem from './news_list_items';

const NewsList = ({dailyNews}) =>{
    
    const items = dailyNews.map((dailyNew)=>{
        return(
            <NewsItem key={dailyNew.id} dailyNew={dailyNew}/>
        )
    });

    return (
        <div>
            {items}
        </div> 
    )
}

export default NewsList; 