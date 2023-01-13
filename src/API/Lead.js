import { serverApiUrl } from "../index"

export const leadPdf = ( callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "lead/leadPdf",
        {
            method: 'GET',
            headers,
            //body: JSON.stringify({ email, password })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}


export const leadPdfDownload = ( callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "lead/leadPdfDownload",
        {
            method: 'GET',
            headers,
            //body: JSON.stringify({ email, password })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}

export const leadUpdate = ( name, contact_number, email, interest,callback) => {

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', serverApiUrl);
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('GET', 'POST', 'OPTIONS');
   // headers.append("password", password)

    fetch(serverApiUrl + "lead/leadUpdate",
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ name, contact_number, email, interest })
        })
        .then((response) => callback(response))
        .catch((error) => { console.log(error) })
}