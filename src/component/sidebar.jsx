import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import '../style/sidebar.scss'
// import Ckmgroups from './ckmgroups';
// import ReactTeam from './ReactTeam';
// import SystemTeam from './SystemTeam';
// import Csharp from './Csharp';




const sidebar = () => {

    return (

        <div className='sidebar'>
            <ul>
                <li><Link to="/Ckmgroups"><i className="fa fa-home"></i> CKM Groups</Link></li>
                <li><Link to="/SystemTeam">&nbsp;<i className='fa fa-group'></i> System Team</Link>
                    <ul>
                        <li><Link to="/Csharp">&nbsp;&nbsp; <i className="fa fa-arrow-right"></i> C#</Link></li>
                        <li><Link to="/PHP">&nbsp;&nbsp; <i className="fa fa-arrow-right"></i> PHP</Link></li>
                        <li><Link to="/ReactTeam">&nbsp;&nbsp; <i className="fa fa-arrow-right"></i> React</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default sidebar