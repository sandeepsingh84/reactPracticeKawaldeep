import React ,{useEffect , useState} from 'react';
import axios from "axios";
import StudentsList from './StudentsList';
import { BrowserRouter as router , route , routes } from 'react-router-dom';
const ApiStudentTableGet = () => {
const [studentArray, setStudentArray]=useState([]);
  const getStudentData =()=>{
      axios
      .get ('https://jsonplaceholder.typicode.com/posts')
      .then ((response)=>setStudentArray(response?.data))
      .catch ((error) => console.log('error', error))

  }  
  console.log('studentArray', studentArray)
  return (
    <router>
        <routes>
            <route path='/' element={<StudentsList studentArray={studentArray} getStudentData={getStudentData} />} >

            </route>
        </routes>
    </router>
  )
}

export default ApiStudentTableGet;