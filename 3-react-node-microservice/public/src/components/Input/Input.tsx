import React,{useState} from 'react'
import requestApi from '../../api/results';
import Show from '../Show/Show'
import validate from './validate'
import styles from './Input.module.scss'

const Input : React.FC = () => {
    const firstParameter = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const secondParameter = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const [results, setResults] = useState([])
    const handleSubmit=()=>{
        const start = firstParameter.current.value
        const end = secondParameter.current.value
        const userInput = {
            start:start,
            end:end
        }
        validate(userInput)?window.alert(validate(userInput)):
        requestApi.get(`?start=${start}&end=${end}`).then((res:any)=>{
            setResults(res.data)
        }).catch((e:any)=>{})
    }

    return (
        <>
            <div className={styles.inputBar}>
                <div className={styles.inputBar_parameter}>
                    <input type="text" ref={firstParameter} placeholder="Start"/>
                </div>
                <div className={styles.inputBar_parameter}>
                    <input type="text" ref={secondParameter} placeholder="End"/>
                </div>
                <div className={styles.inputBar_button} onClick={handleSubmit}>Calculate</div>
            </div>
            {results&&<Show data={results}/>}
        </>
    )
}

export default Input
