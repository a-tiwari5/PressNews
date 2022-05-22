import React from 'react'
import "./sidebar.scss"
import LanguageIcon from '@mui/icons-material/Language';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import SearchIcon from '@mui/icons-material/Search';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import FlagIcon from '@mui/icons-material/Flag';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import MemoryIcon from '@mui/icons-material/Memory';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import ScienceIcon from '@mui/icons-material/Science';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


const Sidebar = () => {
    return (
        <div className='sidebarContainer mt-3'>
            <div className="top">
                <div className="item ">
                    <LanguageIcon className='icon' />
                    <span>Top Stories</span>
                </div>
                <div className="item">
                    <AllInclusiveIcon className='icon' />
                    <span>For you</span>
                </div>
                <div className="item">
                    <SearchIcon className='icon' />
                    <span>Saved Searches</span>
                </div>
            </div>
            <div className="middle">
                <hr className='' />
                <div className="item">
                    <CoronavirusIcon className='icon' />
                    <span>COVID-19</span>
                </div>
                <hr />
            </div>
            <div className="bottom">
                <div className="item">
                    <FlagIcon className='icon' />
                    <span>India</span>
                </div>
                <div className="item">
                    <PublicIcon className='icon' />
                    <span>World</span>
                </div>
                <div className="item">
                    <BusinessIcon className='icon' />
                    <span>Business</span>
                </div>
                <div className="item">
                    <MemoryIcon className='icon' />
                    <span>Techology</span>
                </div>
                <div className="item">
                    <CameraRollIcon className='icon' />
                    <span>Entertainment</span>
                </div>
                <div className="item">
                    <DirectionsBikeIcon className='icon' />
                    <span>Sports</span>
                </div>
                <div className="item">
                    <ScienceIcon className='icon' />
                    <span>Science</span>
                </div>
                <div className="item">
                    <FitnessCenterIcon className='icon' />
                    <span>Health</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar