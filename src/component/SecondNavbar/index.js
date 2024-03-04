
import React from 'react'
import { Menu, Image, Input  } from "antd";
import { SearchOutlined,AppstoreOutlined, } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';






export default function SecondHeader() {
  return (
    <div className='secondNavbar'>
        <div className='HomeIcon'>
        <FontAwesomeIcon icon={faHouse} size="lg" style={{color: "#8c8c8c",}} />
        </div>
       <div className='Resources'>
          <a  href='' style={{ color: 'grey' }} className='A'><h3>Resources</h3></a>
        </div>
        <div className='QA'>
          <a href='' className='Q'><h3>Q&A</h3></a>
        </div>
        <div className='meatothers'>
          <a href='' className='M' ><h3>MeetOthers</h3></a>
  </div> 
    </div>
  )
}

