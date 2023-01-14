
import axios from "axios";
import { BASEURL } from "../../api/api";

    
const fetchItems = async(url) => {
    const response = await axios.get(`${BASEURL}/api/${url}`);
    return response.data.data;
};

export default fetchItems;