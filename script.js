document.getElementById('signin').addEventListener('click', async function () {
    const username = document.getElementById('username').value;
    try {
        const response = fetch('https://example.com/', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username }),
        });
    }
};
