import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from "./components/Layout";
import './App.scss';

import API from "./utils/API";
import configureStore from "./store";
const Flights = lazy(() => import('./pages/Flights'));
const Hotels = lazy(() => import('./pages/Hotels'));
const Cars = lazy(() => import('./pages/Cars'));
const Activity = lazy(() => import('./pages/Activity'));
const FlightResults = lazy(() => import('./pages/FlightResults'));

const store = configureStore();

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Redirect from="/" exact to="/flights" />
                            <Route path="/flights" component={Flights} exact/>
                            <Route path="/flights_search" component={FlightResults}/>
                            <Route path="/hotels" component={Hotels}/>
                            <Route path="/cars" component={Cars}/>
                            <Route path="/activity" component={Activity}/>
                        </Switch>
                    </Suspense>
                </Layout> 
            </Router>
        </Provider>
    );
}

API.init();

export default App;
