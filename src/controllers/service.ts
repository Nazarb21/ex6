import { Request, Response } from 'express';
import pool from '../db';

export const createService = async (req: Request, res: Response) => {
    const { name } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO services (name) VALUES ($1) RETURNING *',
            [name]
        );
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getServices = async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM services');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
