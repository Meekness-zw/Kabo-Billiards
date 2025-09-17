import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'kabo-billiards-super-secret-jwt-key-2024';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@kabobilliards.com';
// Pre-hashed password for 'admin123' - bcrypt hash with salt rounds 12
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2b$12$pto.PT0DNvIZAX01.2uAcucKV69Nngb1p7X6UJRdRjJTKEBvurLhy';

export interface AdminUser {
  id: string;
  email: string;
}

export async function verifyAdminCredentials(email: string, password: string): Promise<boolean> {
  if (email !== ADMIN_EMAIL) {
    return false;
  }
  
  return await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
}

export function generateToken(user: AdminUser): string {
  return jwt.sign(
    { id: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
}

export function verifyToken(token: string): AdminUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminUser;
    return decoded;
  } catch (error) {
    return null;
  }
}

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12);
}
