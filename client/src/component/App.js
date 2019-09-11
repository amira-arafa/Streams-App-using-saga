import React from 'react';
import {Router,Route} from 'react-router-dom';
// import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
// import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App=()=>{
    return (<div>
         
        <Router history={history}>
            <div  className="ui container">
            <Header/>
            asdhusahduhsduhsaudhusdh
                <Route path='/' exact component={StreamList} />
                <Route path='/edit/:id'  component={StreamEdit} />
                {/* <Route path='/delete/:id'  component={StreamDelete} /> */}
                <Route path='/streams/:id'  component={StreamShow} />
                {/* <Route path='/new'  component={StreamCreate} /> */}
            </div>
        </Router>
    </div>);
}

export default App;