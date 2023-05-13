import React from 'react';
import {CiSearch} from "react-icons/ci";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppSelector";

const Home = () => {
    const {movies} = useAppSelector(state => state.MovieReducer)
    const state = Math.floor(Math.random() * 10)
    return (
        <>
            <div>
                <div className="container">
                    <div id='details' className="relative w-[100%] h-[700px] left-0 top-0 z-5"
                         style={{background: `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/tlEFuIlaxRPXIYVHXbOSAMCfWqk.jpg/${Object.values(movies.map(el => el.backdrop_path))[state]}") no-repeat center/cover`}}></div>
                    <div className=' absolute z-20 left-52 top-48'>
                        <h2 className='text-white text-2xl pt-20 text-6xl '> Добро пожаловать.</h2>
                        <h3 className='pt-5 text-4xl text-white'>Миллионы фильмов, сериалов и людей. Исследуйте
                            сейчас.</h3>
                    </div>
                    <div className='absolute left-52 top-[450px] w-[1100px]'>
                        <form>
                            <label htmlFor="default-search"
                                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                         fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <span><CiSearch/></span>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                       className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search Mockups, Logos..." required/>

                                <button
                                    className="text-white absolute right-0 bottom-0 bg-blue-700 rounded-l-2xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='absolute left-0 top-0'>
                <Link to={'/popular'}>
                    <button className='text-black text-2xl'>
                    </button>
                </Link>

            </div>
        </>

    );
};

export default Home;