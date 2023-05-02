const exprss = require('express')
const app = exprss()
const port = 5000
const cors = require('cors');

const chef = require('./data/chef.json')
const food = require('./data/food.json')


app.use(cors())

app.get('/', (req, res) =>{
    res.send('hello')
})

app.get('/chef', (req,res) => {
    res.send(chef)
})

app.get('/chef/:id', (req, res) =>{
    const id = req.params.id
    const selectChef = chef.find(c => c.id == id )
    res.send(selectChef)
})
app.get('/recipe/:id' , (req, res)=>{
    const id = req.params.id
    const recipe = food.find(r => r.id == id)
    res.send(recipe)

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })