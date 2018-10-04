import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';


//COMPONENTS
import Header from './components/header';
import NewsList from './components/news_list'; 
//import NewsItem from './components/news_list_items';



class App extends Component {

    state = {
        news:JSON
    }
    render (){
        //console.log(this.state.news)
    return (
        <div> 
            <Header/>
            <NewsList dailyNews={this.state.news}>
                
            </NewsList>
        </div>
    ) 
    }
}
ReactDOM.render(<App/>,document.querySelector('#root'));