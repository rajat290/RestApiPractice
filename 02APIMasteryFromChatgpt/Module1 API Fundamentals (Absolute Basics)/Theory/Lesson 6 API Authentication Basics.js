// API authentication is the process of verifying a client before allowing access to protected API resources this is done using various Authentication mechanishm like API keys ,Oauth ,JWT and basic Auth.

const { response } = require("express");
const { data } = require("react-router-dom");


// Easy Explanation
// Imagine you want to enter a private party 🎉. The guard at the door won’t let you in unless you show an invitation (API key), a wristband (JWT token), or a VIP card (OAuth token). This is how API authentication works—it ensures only authorized people (users/applications) can access protected data.


// Types of API Authentication
// 1️⃣ API Keys (Simple Authentication) 🔑
// ✅ How It Works:

// A unique key (random string) is given to each user.
// The key must be sent in every API request (usually in headers).

fetch ('https://api.example.com/data',{
    headers:{
        'Authorization': 'Bearer YOUR_API_KEY'
    }
})
.then(response => response.json())
,then(data => console.log(data))
.catch(error => console.error(error));

// 🔹 Used in: Public APIs (like OpenWeather, Unsplash).
// 🔹 Security concern: If the key is exposed, anyone can use it.

// 2️⃣ Basic Authentication (Username & Password) 👤
// ✅ How It Works:

// You send a username & password in the request.
// Often encoded in Base64 for security.

fetch('https://api.example.com/data',{
    headers:{
        'Authorization': 'Basic ' + btoa('username:password')
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

// 🔹 Used in: Internal company APIs.
// 🔹 Security concern: Weak encryption; credentials can be stolen.


// 3️⃣ Token-Based Authentication (JWT - JSON Web Token) 🎟️
// ✅ How It Works:

// You log in once with username/password.
// The server gives you a JWT token (which contains encrypted user info).
// You must send this token in every request to access protected data.

fetch('https://api.example.com/protected-data',{
    headers:{
        'Authorization': 'Bearer YOUR_JWT_TOKEN'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));


// Used in: Secure login systems (like login authentication in web apps).
// 🔹 More secure than API keys because tokens expire and can be refreshed.

// 4️⃣ OAuth (Third-Party Authentication) 🔄
// ✅ How It Works:

// Instead of entering a username/password, users can log in using Google, Facebook, GitHub, etc.
// The third-party service provides a token, which you use to access the API.
// ✅ Example:

// When you click “Login with Google”, an OAuth token is generated.
// This token is used for authentication instead of passwords.
// 🔹 Used in: Google, Facebook, GitHub login systems.
// 🔹 Highly secure because it uses access control and expiration policies.


// 🔹 When to Use Which Authentication?
// Authentication Type	Best For	Security Level
// API Key	Public APIs (e.g., weather data)	Low
// Basic Auth	Internal APIs, quick authentication	Medium
// JWT Token	User authentication, login systems	High
// OAuth	Third-party login (Google, Facebook)	Very H