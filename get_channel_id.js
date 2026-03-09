const https = require('https');

https.get('https://www.youtube.com/watch?v=fkVLZptUHGo', (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
        const match = data.match(/"channelId":"(UC[^"]+)"/);
        if (match) {
            console.log(match[1]);
        } else {
            console.log('Not found');
        }
    });
}).on('error', (err) => {
    console.error("Error: " + err.message);
});
