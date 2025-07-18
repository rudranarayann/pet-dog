const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const petRouter = require('./Router/petRouter');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

app.use('/api/pets', petRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`));
