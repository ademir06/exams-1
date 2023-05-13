import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {setSearch} from "../../store/actionCreators";
import {useParams} from "react-router-dom";

const Search = () => {
    const dispatch = useAppDispatch()
    const {movieName} = useParams()
    const {search} = useAppSelector(state => state.SearchReducer)
    const {language} = useAppSelector(state => state.MovieReducer)
    console.log(search)
    useEffect(() => {
        dispatch(setSearch(movieName, language))
    }, [movieName, language])
    return (
        <div>
            <div>
                <div className="container">
                    <div className='text-black pt-10 flex items-center flex-wrap justify-between pt-20'>
                        {
                            search.map(el => (
                                <div className='w-[200px]'>
                                    <img className='rounded-xl'
                                         src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                         alt=""/>
                                    <h1>{el.title}</h1>
                                    <div>
                                        <div className="vote" style={{
                                            background: `conic-gradient(yellow,${Math.round(el.vote_average * 10) * 3.59})`
                                        }}>
                                            <h3>
                                                {Math.round(el.vote_average * 10)} %
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;