import { serverApiUrl } from "../index"
import Axios from "axios"

export const addTopSlide = (name, selectedFile, callback) => {

    const data = new FormData();
    data.append("file", selectedFile)
    data.append("name", name)

    let bon = JSON.stringify({ name })
    Axios.post(serverApiUrl + "pageData/addTopSlide", data, bon)
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


export const addBottomSlide = (name, selectedFile, callback) => {

    const data = new FormData();
    data.append("file", selectedFile)
    data.append("name", name)

    let bon = JSON.stringify({ name })

    Axios.post(serverApiUrl + "pageData/addBottomSlide", data, bon)
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


export const updateDetail = (data, callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "pageData/updateDetail",
        {
            method: 'PUT',
            headers,
            body: JSON.stringify({ ...data })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


export const getall = (callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
    // headers.append("password", password)

    fetch(serverApiUrl + "pageData/getall",
        {
            method: 'GET',
            headers,
            //body: JSON.stringify({ email, password })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}
