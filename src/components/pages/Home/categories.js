'use client'

import { useEffect, useState } from "react"
import SliderContainer from "./sliderContainer"



const api = 'http://localhost:7000/categories'

export default function Categories() {
    const [data , setData] = useState([])
    useEffect(() => {

        fetch(api)
            .then(res => res.json())
            .then(res => setData(res))
            .catch((e) => console.log(e))
        return () => {
            setData([])
        }
        
    },[])
    
    return(
        <div>
            {
                data.map(category => <SliderContainer title={category.list_name} books={category.books}/>)
            }
        </div>
    )
}





