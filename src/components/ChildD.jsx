import React from 'react';
import { first_name,last_name } from '../App';
const ChildD = () => {
    return (
        <>
            <first_name.Consumer>{(fname) => {
                return (
                    <last_name.Consumer>{(lname) => {
                        return (
                            <>
                                <h1>first_name : {fname}<br /> Last_name : {lname}</h1>
                                <h2>my name is {fname} {lname}</h2>
                            </>
                        )
                    }}
                
                    </last_name.Consumer>
                )
            }}  
           </first_name.Consumer>
               
          </>     
    
    )
}
export default ChildD;
