/* Post Request */

export const postRequest = async (api_url, bodyData, Token) => {
    console.log(api_url, bodyData, Token)
    let header = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=UTF-8'
    }
    // if (typeof (Token) != 'undefined') header.append("Auth_token", 'k')
    let data = await fetch(api_url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(bodyData),
    });
    if (data.ok) {
        data = await data.json();
        return data;
    }
}

/*Post Request for image uploading */
export const PostImageRequest = async (api_url, bodyData, Token) => {

    // if (typeof (Token) != 'undefined') header.append("Auth_token", 'k')
    let data = await fetch(api_url, {
        method: "POST",
        body: bodyData,
    });
    if (data.ok) {
        data = await data.json();
        return data;
    }
}
/* Get Request */
export const getRequest = async (api_url, Token) => {
    let header = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=UTF-8'
    }
    // if (typeof (Token) != 'undefined') header.append("Auth_token", 'k')
    let data = await fetch(api_url, {
        method: "GET",
        headers: header,
    });
    if (data.ok) {
        data = await data.json();
        return data;
    }
}