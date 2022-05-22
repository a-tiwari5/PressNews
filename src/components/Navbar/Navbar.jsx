import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import { connect } from "react-redux"
import { saveArticles } from "../../actions/"

const Navbar = (props) => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const { onSearchSelect } = props
    const onChange = (en) => {
        setTerm(en.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://newsapi.org/v2/everything?from=2022-05-22&sortBy=popularity&apiKey=8faa5eed57d3465280b116fa93f95593', {
                params: {
                    q: term,
                    sortBy: 'popularity'
                }
            })
            setResults(res.data.articles)
        }
        const timeOutId = setTimeout(() => {
            if (term) {
                fetchData();
            }
        }, 1000)

        return () => {
            clearTimeout(timeOutId)
        }
    }, [term])



    useEffect(() => {
        onSearchSelect(results)
    }, [results])

    return (
        <div className='navbarContainer d-flex justify-content-between align-items-center sticky-top'>
            <div className='left ms-5'>
                <span>PressNews</span>
            </div>
            <div className="searchBar d-flex align-items-center">
                <SearchIcon className="icon" />
                <input type="text" value={term} onChange={(en) => onChange(en)} />
            </div>
            <div className="profile d-flex align-items-center">
                <div className="profilePicture">
                    <img src="https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774" alt="" />
                </div>
                <span>Jane Doe</span>
            </div>
        </div>
    )
}

export default connect(null, { saveArticles })(Navbar)