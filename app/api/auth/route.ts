import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { hash, compare } from 'bcrypt';

export async function POST(request: Request) {
  try {
    const { email, password, action } = await request.json();

    if (action === 'login') {
      const [rows]: any = await pool.execute(
        'CALL sp_user_login(?)',
        [email]
      );

      const user = rows[0][0];
      if (!user) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }

      const passwordMatch = await compare(password, user.password);
      if (!passwordMatch) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }

      // In a real application, you would generate and return a JWT token here
      return NextResponse.json({
        user: {
          id: user.id,
          email: user.email,
          name: user.name
        }
      });
    }

    if (action === 'register') {
      const hashedPassword = await hash(password, 10);
      
      const [result]: any = await pool.execute(
        'CALL sp_user_register(?, ?)',
        [email, hashedPassword]
      );

      return NextResponse.json({
        message: 'User registered successfully'
      });
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}