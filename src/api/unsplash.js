import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: "Client-ID z9cdRwsU4Xuffz4R1L28175iNvyDiw3eCN6bMkMu4EE"
    }
})