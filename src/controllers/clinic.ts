import { Request, Response } from 'express';
import pool from '../db';

export const createClinic = async (req: Request, res: Response) => {
    const { name, services } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO clinics (name, services) VALUES ($1, $2) RETURNING *',
            [name, services]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getClinics = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM clinics');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
