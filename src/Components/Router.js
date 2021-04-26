import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from '../Routes/Home';
import TV from '../Routes/TV';
import Search from '../Routes/Search';

export default () => (
// 주석
    <Router>
        <Switch>
            {/* - Switch 때문에 한번에 오직 하나의 route만 Render하게 됨
                - exact 는 정확히 일치할때만 route 적용
                - redirect는 입력url(this)이 route 목록에 있는 경우는 해당 url로, route 목록에 없으면 /로 이동
            */}


            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
           {/* <Route path="/tv/popular"  render={() => <h1>Popular</h1>}/>    */}
            <Route path="/search"  component={Search} />
            <Redirect from="*" to="/" /> 
        </Switch>
    </Router>

);
