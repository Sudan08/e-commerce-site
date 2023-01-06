import { useState , useEffect } from "react";
import axios from "axios";
import { BASEURL } from "../../api/api";

export default function useGetItems(url){


    const [result , setData] = useState([]);

    useEffect(()=>{
        if (!url){
            setData([]);
        }  else{
            axios.get(`${BASEURL}/${url}`)
                .then((res)=>{
                    setData(res.data);
                });
        }

       
    },[url]);

    return {result};
};