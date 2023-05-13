import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setAddToFavorite, SetMovie} from "../../store/actionCreators";
import {useAppSelector} from "../../hooks/useAppSelector";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Popular = () => {
    const dispatch = useAppDispatch()
    const {movies, language} = useAppSelector(state => state.MovieReducer)
    console.log(movies)

    useEffect(() => {
        dispatch(SetMovie(language))
    }, [language])
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <>
            <div>
                <div className="container">
                    <div className='text-black pt-10'>
                        <Slider {...settings}>
                            {
                                movies.map(el => (
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
                                            <button onClick={()=> dispatch(setAddToFavorite(el))}
                                                    className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Teal
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popular;