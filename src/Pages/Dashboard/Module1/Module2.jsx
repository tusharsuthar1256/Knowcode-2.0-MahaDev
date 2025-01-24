import React, { useContext } from 'react'
import Quiz from 'react-quiz-component';
import quiz2 from './quiz2.js';
import { AppContext } from '../../../Context/appContext.jsx';

function ModuleTwo() {
     const {isExpand} = useContext(AppContext);
     return (
          <>
          <div className={`text-gray-600 body-font h-screen flex justify-center item-center ${
          isExpand ? 'ml-50  w-[calc(100%-12rem)] ' : ' w-[calc(100%-5rem)] ' 
        }`}>

          <Quiz quiz={quiz2} />
          </div>
          </>
     )
}

export default ModuleTwo
