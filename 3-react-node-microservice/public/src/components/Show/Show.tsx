import React from 'react'
import styles from './Show.module.scss'

interface ShowProps{
    data: Array<string>;
}

const Show : React.FC<ShowProps> = (props) => {
    const {data} = props
    return(
        <ul className={styles.content}>
            {
            data.map((item,index)=>{
                return <li key={index}>{(item as any).input}.{(item as any).output?(item as any).output:'-'}</li>})
            }
        </ul>
    )
}

export default Show
