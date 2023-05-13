import React from 'react';
import Header from "./Header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/page/Home";
import Search from "./components/page/Search";
import Popular from "./components/page/Popular";
import Favorite from "./components/page/Favorite";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/favorite'} element={<Favorite/>}/>
                <Route path={'/search/movie-search/:movieName'} element={<Search/>}/>
            </Routes>
            <Popular/>
        </>
    );
}

export default App;
