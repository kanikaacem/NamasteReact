/* Post Request */
let header = {
    'Access-Control-Allow-Origin': "*",
    'Content-Type': 'application/json; charset=UTF-8'
};

export const postRequest = async (api_url, bodyData) => {
    let token = localStorage.getItem("auth_token");

    if (token != null)
        header = {
            'Access-Control-Allow-Origin': "*",
            'Content-Type': 'application/json; charset=UTF-8',
            'authorization': 'Bearer ' + token
        };
    // console.log(token)
    let data = await fetch(api_url, {
        method: "POST",
        headers: header,
        body: JSON.stringify(bodyData),
    });
    data = await data.json();
    return data;
    // if (data.ok) {
    //     data = await data.json();
    //     return data;
    // }
    // else {
    //     data = await data.json();
    //     return data;
    // }
}

/*Post Request for image uploading */
export const PostImageRequest = async (api_url, bodyData) => {
    let token = localStorage.getItem("auth_token");

    if (token != null)
        header = {
            'Access-Control-Allow-Origin': "*",
            'authorization': 'Bearer ' + token
        };

    let data = await fetch(api_url, {
        method: "POST",
        headers: header,
        body: bodyData
    });
    if (data.ok) {
        data = await data.json();
        return data;
    }
}
/* Get Request */
export const getRequest = async (api_url) => {
    let token = localStorage.getItem("auth_token");

    // if (token != null) header.append('authorization', 'Bearer' + token);
    let data = await fetch(api_url, {
        method: "GET",
        headers: header,
    });
    if (data.ok) {
        data = await data.json();
        return data;
    }
}

export const getRequestwithData = async (api_url, bodyData) => {

    let data = await fetch(api_url, {
        method: "GET",
        headers: header,
        body: JSON.stringify(bodyData)
    });
    if (data.ok) {
        data = await data.json();
        return data;
    }
}

export const getRequestWithToken = async (api_url) => {
    let token = localStorage.getItem("auth_token");

    if (token != null)
        header = {
            'Access-Control-Allow-Origin': "*",
            'authorization': 'Bearer ' + token
        };

    let data = await fetch(api_url, {
        method: "GET",
        headers: header,
    });
    if (data.ok) {
        data = await data.json();
        return data;
    }
}