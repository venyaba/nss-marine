import { NextRequest, NextResponse } from 'next/server';

// Явно укажем рантайм и динамичность (на Vercel это стабильнее)
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
// Лимит для функции (в секундах, если Vercel поддерживает для вашего тарифа)
export const maxDuration = 10;

// Простая проверка доступности — GET не должен падать/висеть
export async function GET() {
  return new NextResponse(JSON.stringify({ ok: true, ts: Date.now() }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Быстрый парс с обработкой кривого JSON
    let body: any = null;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Bad JSON' }, { status: 400 });
    }

    const { name, email, phone, message, hp } = body ?? {};

    // Honeypot: отвечаем успехом, чтобы боты не ретраили и не держали соединение
    if (typeof hp === 'string' && hp.trim() !== '') {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Логирование (в проде — email/DB)
    console.log('New contact request:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}