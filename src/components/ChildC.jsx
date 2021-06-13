import React,{useContext} from 'react'
import ChildD from './ChildD';
import { first_name,last_name } from '../App';
const ChildC = () => {
    const f_name = useContext(first_name)
    const l_name=useContext(last_name)
    return (
        <>
            <h4>
                My name is :{f_name} {l_name}
            </h4>
            <ChildD />
        </>
    )
}
export default ChildC;