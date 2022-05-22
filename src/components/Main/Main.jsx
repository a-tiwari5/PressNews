import React from 'react'
import "./main.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from "../Box/Box"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Main = ({ searchResults }) => {

    const [headlines, setHeadlines] = useState([])
    const [indiaNews, setIndiaNews] = useState([])
    useEffect(() => {
        const fetchHeadlines = async () => {
            const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=8faa5eed57d3465280b116fa93f95593', {
                params: {
                    pageSize: 8
                }
            })
            if (res) {
                setHeadlines(res.data.articles)
            }
        }
        fetchHeadlines();

        const fetchIndiaNews = async () => {
            const res = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=8faa5eed57d3465280b116fa93f95593', {
                params: {
                    country: 'in',
                    pageSize: 8
                }
            })
            setIndiaNews(res.data.articles)
        }
        fetchIndiaNews();

    }, [])


    useEffect(() => {
        setHeadlines(searchResults)
    }, [searchResults])

    return (
        <div className='mainContainer mt-5'>
            <div className="headlines">
                {
                    searchResults.length === 0 ? <div className="top d-flex justify-content-between align-items-center">
                        <h4 className='title'>Headlines</h4>
                        <span className='more text-primary'>More Headlines</span>
                    </div> : ''
                }
                {
                    searchResults.length === 0 ? <div className="coronaBox d-flex align-items-center">
                        <span className='text-primary'>COVID-19 news:</span>
                        <p>See the latest coverage of the coronavirus</p>
                        <ArrowForwardIosIcon className='icon' />
                    </div> : ''
                }
                <div className="d-flex flex-column align-items-center justify-content-center">
                    {
                        headlines.map((article) => {
                            return <Box key={article.title} title={article.title}
                                img={article.urlToImage} url={article.url} desc={article.description}
                                source={article.source.name} publishedAt={article.publishedAt}
                            />
                        })
                    }
                </div>
            </div>
            {
                searchResults.length === 0 ? <div className="indiaNews mt-5">
                    <div className="top d-flex justify-content-between align-items-center">
                        <h4 className='title'>India</h4>
                        <span className='more text-primary'>More news On India</span>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        {
                            indiaNews.map((article) => {
                                return <Box key={article.title} title={article.title}
                                    img={article.urlToImage} url={article.url} desc={article.description}
                                    source={article.source.name} publishedAt={article.publishedAt}
                                />
                            })
                        }
                    </div>
                </div> : ''
            }
        </div>
    )
}

export default Main