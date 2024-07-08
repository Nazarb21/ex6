import { Request, Response } from 'express';
import pool from '../db';

export const createDoctor = async (req: Request, res: Response) => {
    const { name, clinics, services } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO doctors (name, clinics, services) VALUES ($1, $2, $3) RETURNING *',
            [name, clinics, services]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getDoctors = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM doctors');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
