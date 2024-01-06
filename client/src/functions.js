import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { useSearchParams } from "react-router-dom"
import axios from 'axios'


export const MakeAPIRequest = () => {
    const [data, setdata] = useState()
    const location = useLocation()
    
    useEffect(() => {
        axios.post('/'+location.hash.replace('#', '')).then(res => setdata(res.data)).catch(err => setdata(err))
    }, [location.hash])

    if(data){
        return JSON.stringify(data, null, 4)
    }
}

export const GetHomePosts = (props) => {
    const [data, setdata] = useState()
    const location = useLocation()
    
    useEffect(() => {
        axios.post('/'+props.url).then(res => setdata(res.data)).catch(err => setdata(err))
    }, [location.hash])

    if(data){
        return data
    }
}