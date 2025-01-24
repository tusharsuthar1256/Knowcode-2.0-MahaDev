import React, { useState } from 'react'
import Sidebar from './sidebar/sidebar'
import MainWindow from './MainWindow/MainWindow'

function Dashboard() {
     const [isExpand, setIsExpand] = useState(true);
     return (
          <>
          <div>
               <Sidebar setExpand={setIsExpand}/>
               <MainWindow isExpand={isExpand}/>
          </div>
          </>
     )
}

export default Dashboard
