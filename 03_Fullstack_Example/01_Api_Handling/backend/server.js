import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("Server is ready..., go to '/api/jokes' ")
});

// Get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'The Lazy Programmer',
            content: 'I will fix this bug tomorrow. — said every developer ever.'
        },
        {
            id: 2,
            title: 'Math Prayer',
            content: 'Dear God, please let me find x. She is been missing since 8th grade.'
        },
        {
            id: 3,
            title: 'Coffee Confession',
            content: 'I told my coffee I love it more than my wife. Now it is espresso-ing feelings.'
        },
        {
            id: 4,
            title: 'Skeleton Joke',
            content: 'Why do not skeletons fight each other? They do not have the guts.'
        },
        {
            id: 5,
            title: 'WiFi Prayer',
            content: 'Our WiFi, who art in heaven, please connect.'
        }

    ]

    res.send(jokes)
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})


