import { useEffect } from "react"
import { useState } from "react"


const useFetch=(url)=>{
    const [data,setData]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(null)
    useEffect(()=>{
        const fetchData=async()=>{
            setLoading(true)
            try {
                const res=await fetch(url)
                if(!res.ok){
                    setError('Failed to fetch')
                    alert('Failed to fetch')
                }
                const result =await res.json()
                setLoading(false)
                setData(result.data)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchData()
    },[url])
    return {
        data,loading,error
    }
}

export default useFetch