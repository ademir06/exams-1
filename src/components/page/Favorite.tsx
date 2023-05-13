import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import {setAddToFavorite} from "../../store/actionCreators";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const Favorite = () => {
    const dispatch = useAppDispatch()
    const {favorite} = useAppSelector(state => state.FavoriteReducer)
    console.log(favorite)
    return (
        <div className=''>
            <div className='container'>
                <div className='text-black pt-10'>
                    <div className='flex items-center justify-between flex-wrap pt-20'>
                        {
                            favorite.map(el => (
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
                                        <button onClick={() => dispatch(setAddToFavorite(el))}
                                                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Teal
                                        </button>
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

export default Favorite;