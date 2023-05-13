import React, {useState} from 'react';
import {HiOutlineSearch} from "react-icons/hi";
import logo from '../img/logo-png.svg'
import {AiOutlinePlus} from "react-icons/ai";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {language} from "../store/actionCreators";

const Header = () => {
        const [search, setSearch] = useState('')
        const navigate = useNavigate()
        const dispatch = useAppDispatch()
        const handleSearch = (name: any) => {
            if (search.trim() !== '') {
                navigate(`/search/movie-search/${name}`)
            }
            setSearch('')
        }
        const setLanguage = (e: React.ChangeEvent<any>) => {
            dispatch(language(e.target.value))
        }
        return (
            <div id='' className='bg-[#032541] fixed w-full  z-50  '>
                <div className="container">
                    <nav className="border-gray-200 dark:bg-gray-900 flex items-center justify-between  ">
                        <div className="max-w-screen-xl flex  p-4">
                            <Link to={'/'} className="flex items-center">
                                <img src={logo} className="h-8 mr-3 w-[200px]" alt="Flowbite Logo"/>
                            </Link>
                            <div className="items-center  hidden w-full md:flex md:w-auto md:order-1 ml-10">
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border text-white border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <a href="#"
                                           className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0"
                                           aria-current="page">Home</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0">About</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0">Services</a>
                                    </li>
                                    <li>
                                        <Link to={'/'}
                                              className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0">Services</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div className='text-white text-2xl pr-4'>
                                <Link to={'favorite'}>
                                    <AiOutlinePlus/>
                                </Link>
                            </div>
                            <div>
                                <select name="" id="" className='mr-2' onChange={(e) => setLanguage(e)}>
                                    <option value="en-US">ru</option>
                                    <option value="ru-RU">en</option>
                                </select>т
                            </div>
                            <div className=' text-white pr-3'>
                                <h1>войти</h1>
                            </div>
                            <div className=' text-white pr-4'>
                                <h1>Присоединиться к TMDB</h1>
                            </div>
                            <div className="flex md:order-2">
                                <div className="relative hidden md:block">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <button onClick={() => {
                                            setSearch('')
                                            handleSearch(search)
                                        }
                                        }>
                                            <span><HiOutlineSearch/></span>
                                        </button>

                                        <span className="sr-only">Search icon</span>
                                    </div>
                                    <input onKeyDown={(e) => {
                                        switch (e.key) {
                                            case 'Enter':
                                                setSearch('')
                                                handleSearch(search)
                                                break
                                        }
                                    }
                                    }
                                           onChange={(e) => navigate(`/search/movie-search/${e.target.value}`)}
                                           type="text" id="search-navbar"
                                           className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                           placeholder="Search..."/>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
            ;
    }
;

export default Header;