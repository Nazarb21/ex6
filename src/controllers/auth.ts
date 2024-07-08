import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const login = (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Dummy login without checking the password for simplicity
    const token = jwt.sign({ username }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    res.json({ token });
};
