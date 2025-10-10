import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, hp } = body;

    // Check honeypot - if filled, it's likely a bot
    if (hp && hp.trim() !== '') {
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      );
    }

    // Log the contact request (in production, you'd save to database or send email)
    console.log('New contact request:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}