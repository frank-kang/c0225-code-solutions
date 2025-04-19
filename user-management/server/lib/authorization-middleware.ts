/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

const hashKey = process.env.TOKEN_SECRET ?? '';
if (!hashKey) throw new Error('TOKEN_SECRET not found in env');

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  /* your code here */
  const header = req.get('authorization');
  if (!header) {
    throw new ClientError(401, 'authentication required');
  }
  const token = header.split('Bearer ')[1];
  if (!token) {
    throw new ClientError(401, 'authentication required');
  }
  const payload = jwt.verify(token, hashKey);
  if (!payload) {
    throw new ClientError(401, 'authentication required');
  }
  req.user = payload as Request['user'];
  next();
}
