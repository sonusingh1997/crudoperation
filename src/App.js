import React from 'react'
import ChildA from './components/ChildA';
import { createContext } from 'react'
import ClassComponentPrac from './components/ClassComponentPrac'

const first_name = createContext()
const last_name=createContext()

const App = () => {
 return (
    <>
      <first_name.Provider value={"sonu"} >
        <last_name.Provider value={" singh"} >
            <ChildA />
        </last_name.Provider >
      </first_name.Provider>
       
      <ClassComponentPrac  name='monu'/>
     
     
      
    </>
  )
}
export default App;
export { first_name }
export {last_name}
