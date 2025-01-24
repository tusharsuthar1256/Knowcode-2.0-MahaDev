import React, { useContext, useState } from 'react'
import Sidebar from './sidebar/sidebar'
import MainWindow from './MainWindow/MainWindow'
import { AppContext } from '../../Context/appContext';

function Dashboard() {
       const {isExpand,setIsExpand} = useContext(AppContext);
     
     return (
          <>
          <div>
               <MainWindow isExpand={isExpand}/>
          </div>
          </>
     )
}

export default Dashboard
