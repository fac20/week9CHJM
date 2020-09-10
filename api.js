function request( url, options) {
    return fetch( url, options).then( response => {
        if (!response.ok) {
            const error = new Error("HTTP Error!");
            error.status = response.status;
            throw error
        } else {
            return response.json();
        }
    })
}

export function loginSubmit(email, password, url) {
    return request(url, {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: { "content-type" : "application/json"}
    })
}

export function signupSubmit(username, email, password, url) {
    return request(url, {
        method: "POST",
        body: JSON.stringify({username, email, password}),
        headers: { "content-type" : "application/json"}
    })
}