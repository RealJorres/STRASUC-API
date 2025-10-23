const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const authRoutes = require('./routes/authRoutes');
const universityRoutes = require('./routes/universityRoutes');
const sportRoutes = require('./routes/sportRoutes');
const teamRoutes = require('./routes/teamRoutes');
const matchRoutes = require('./routes/matchRoutes');
const scoreRoutes = require('./routes/scoreRoutes');
const participantRoutes = require('./routes/participantRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/v1/universities', universityRoutes);
app.use('/api/v1/sports', sportRoutes);
app.use('/api/v1/teams', teamRoutes);
app.use('/api/v1/matches', matchRoutes);
app.use('/api/v1/scores', scoreRoutes);
app.use('/api/v1/participants', participantRoutes);

app.get('/', (req,res)=> res.sendFile(path.join(__dirname, 'default', 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));