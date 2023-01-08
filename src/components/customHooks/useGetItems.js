import { useState , useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../api/api";

export default function useGetItems(url){

    const [status , setStatus] = useState("Loading");
    const [result , setData] = useState([]);

    useEffect(()=>{
        if (!url){
            setData([]);
        }  else{
            axios.get(`${BASEURL}/api/${url}`)
                .then((res)=>{
                    setData(res.data);
                    setStatus("Loaded");
                });
            
        }

       
    },[url]);

    return {result , status} ;
};