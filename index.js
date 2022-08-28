const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const CronJob = require('node-cron');
const monitor = require('./services/monitor');
const productRoute = require('./routers/productRoute');

const app = express();

app.set('view engine', 'ejs');

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productRoute);

app.get('/', function (req, res) {
  res.render('pages/index');
});

// monitor();

app.listen(port, () => {
  console.log(`server is listening on Port ${port}`);
  const job = CronJob.schedule('* */12 * * *', monitor);
});
