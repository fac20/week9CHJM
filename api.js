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

export function loginSubmit(username, password, url) {
    return request(url, {
        method: "POST",
        body: JSON.stringify({username, password}),
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

export function changePasswordSubmit(oldPassword, newPassword, url){

    return request(url, {
        method: "PUT",
        body: JSON.stringify({oldPassword, newPassword}),
        headers: { 
            "content-type" : "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("access_token"),
        }
    }).then(res => {
        window.alert(res.message);
        location.reload();
    });
}

export function addHarvest(food_type, taste, harvest_time, location, date, url) {
    
    console.log("url: ", url)
    console.log("token: ", window.localStorage.getItem("access_token"));

    console.log("elements: ", food_type, taste, harvest_time, location, date);

    return request(url, {
        method: "POST",
        body: JSON.stringify({ food_type, taste, harvest_time, location, date }),
        headers: {
            "content-type": "application/json",
            "Authorization": "Bearer " + window.localStorage.getItem("access_token")
        }
    }).then(res => {
        window.alert(res.message);
        window.location.reload();
    })
}
