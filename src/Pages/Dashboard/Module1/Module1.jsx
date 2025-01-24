import React, { useContext } from 'react'
import Quiz from 'react-quiz-component';
import quiz1 from './quiz1.js';
import { AppContext } from '../../../Context/appContext.jsx';

function ModuleOne() {
     const {isExpand} = useContext(AppContext);
     return (
          <>
          <div className={`text-gray-600 body-font h-screen flex justify-center item-center ${
          isExpand ? 'ml-50  w-[calc(100%-12rem)] ' : ' w-[calc(100%-5rem)] ' 
        }`}>

          <Quiz quiz={quiz1} />
          </div>
          </>
     )
}

export default ModuleOne
