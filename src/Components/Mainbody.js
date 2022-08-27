import React,{useState} from 'react';
import {GoChevronRight} from "react-icons/go";
import{FaSearch, FaTimes,FaStream} from "react-icons/fa";
import Drinks from './Drinks';


const Mainbody = ({data}) => {

    const alcoholic =data.filter(items=>items.strAlcoholic==="Alcoholic");
    const nonAlcoholic = data.filter(items=>items.strAlcoholic==="Non alcoholic");

    const[search,setSearch] = useState('');
    const[menutoggle,setMenuToggle] = useState(false);
    
    return (
        <section className="container-section">

            {/* ======= Menu section ======== */}
            <div className="main-container-first">


                <div className='menusize'>
                    <div className='toggle-icon'>{menutoggle ? <FaTimes/>: <FaStream/> }</div>
                    <h4 onClick={()=>setMenuToggle(!menutoggle)}>Menu</h4>
                </div>
                
                {menutoggle && <ul className='mobilemenu'>
                    <li><a href="#alcoholic" onClick={()=>setMenuToggle(!menutoggle)}><span>Alcoholic </span> <GoChevronRight/></a></li>
                    <li><a href="#" onClick={()=>setMenuToggle(!menutoggle)} ><span>Non Alcoholic </span> <GoChevronRight/></a></li>
                </ul> }


                <ul className='hidemenu'>
                    <li><a href="#alcoholic"><span>Alcoholic </span> <GoChevronRight/></a></li>
                    <li><a href="#non"><span>Non Alcoholic </span> <GoChevronRight/></a></li>
                </ul>


                
            </div>


            {/* ====== second block ====== */}
            <div className="main-container-second">

             {/* === search bar======= */}
                <div className="searchBar">
                   <input  className='search-input' type="text" 
                    onChange={e=>setSearch(e.target.value)}
                    placeholder='Search your favorite items...'/>
                    
                   <button className="search-btn"><FaSearch/></button>
                </div>


              {/* ================= coctails ========== */}
                <div className='nonAlcoholic' >
                    <Drinks strAlcoholic={nonAlcoholic} id='non' search={search}  title='Non Alcoholic'/>
                </div>

                <div className='alcoholic'>
                    <Drinks strAlcoholic={alcoholic} id='alcoholic' search={search} title='Alcoholic'/>
                </div>
                
            </div>
        </section>
    )
}

export default Mainbody;