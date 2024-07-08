import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import clinicRoutes from './routes/clinic';
import doctorRoutes from './routes/doctor';
import serviceRoutes from './routes/service';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/clinics', clinicRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/services', serviceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
