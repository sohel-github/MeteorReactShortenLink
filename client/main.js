import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import UrlForm from './components/url_form';
import LinkList from './components/link_list';

const App = ()=> {
    return(
        <div>
            <Header />
            <UrlForm />
            <LinkList />
        </div>
    )
}

Meteor.startup(()=>{
    ReactDOM.render(<App />, document.querySelector('.renderTarget'));
})