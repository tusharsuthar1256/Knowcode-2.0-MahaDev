import React, { useContext } from 'react'
import Quiz from 'react-quiz-component';
import quiz3 from './quiz3.js';
import { AppContext } from '../../../Context/appContext.jsx';

function ModuleThree() {
     const {isExpand} = useContext(AppContext);
     return (
          <>
          <div className={`text-gray-600 body-font h-screen flex justify-center item-center ${
          isExpand ? 'ml-50  w-[calc(100%-12rem)] ' : ' w-[calc(100%-5rem)] ' 
        }`}>

          <Quiz quiz={quiz3} />
          </div>
          </>
     )
}

export default ModuleThree
