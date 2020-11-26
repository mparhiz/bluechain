class Services {
    login(username, password) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: "Username=" + username + "&Password=" + password + "&Client_ID=c.user.password&Grant_type=password" 
        };
        return fetch("https://webapi.demo.bluechain.com/v1/OAuth2/token", requestOptions)
            .then(res => res.json());
    }

    onBoarding(userData) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };
        return fetch('https://webapi.demo.bluechain.com/v1/onboard', requestOptions)
            .then(response => response.json());

    }
} 

export default Services;


// Username: TestUserDemo
// Password: @Password_1234
// Client_ID: c.user.password
// Grant_type: password