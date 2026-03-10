import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("Server is ready. ")
});

// products info 


app.get('/api/products', (req, res) => {
    const products = [

        {
            id: 1,
            name: 'Wooden Dining Table',
            price: '320',
            image: 'https://images.pexels.com/photos/209331/pexels-photo-209331.jpeg'
        },
        {
            id: 2,
            name: 'Modern Desk Lamp',
            price: '45',
            image: 'https://images.pexels.com/photos/375118/pexels-photo-375118.jpeg'
        },
        {
            id: 3,
            name: 'Leather Sofa',
            price: '890',
            image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg'
        },
        {
            id: 4,
            name: 'Ceramic Coffee Mug',
            price: '18',
            image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg'
        },
        {
            id: 5,
            name: 'Wireless Earbuds',
            price: '79',
            image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
        }
    ]

    // http://localhost:3000/api/products?search=Table

    if (req.query.search) {
        const filterProducts = products.filter((product) => product.name.includes(req.query.search))
        res.send(filterProducts)
        return;
    }

    setTimeout(() => {
        res.send(products)
    }, 3000)

});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

