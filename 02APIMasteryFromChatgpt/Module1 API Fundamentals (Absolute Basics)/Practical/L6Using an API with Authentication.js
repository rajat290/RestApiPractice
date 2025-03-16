// 🚀 Task: Fetch GitHub User Data using an API Key
// GitHub requires authentication for some API requests.
// 👉 Your task: Fetch your own GitHub user data using an API key.

// 📌 Steps to Complete
// 1️⃣ Go to GitHub Developer Settings and create a Personal Access Token.
// 2️⃣ Use fetch() in JavaScript to request your GitHub profile data.
// 3️⃣ Display your GitHub username and followers count in the console.

fetch('https://api.github.com/rajat/290', {
    headers:{
        'Authorization': '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',
    }
})

.then(response => response.json())
.then(data => console.log(data))
