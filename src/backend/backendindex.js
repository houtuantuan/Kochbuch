
const app = require('./server')
const port = 8000
// const cors = require('cors');
require('dotenv').config()


// app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})