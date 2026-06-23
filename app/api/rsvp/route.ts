import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

type RsvpBody = {
  name?: string;
  status?: 'yes' | 'no';
};

export async function POST(req: NextRequest) {
  let body: RsvpBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const name = body.name?.trim();
  const status = body.status;

  if (!name || (status !== 'yes' && status !== 'no')) {
    return NextResponse.json({ error: 'invalid_payload' }, { status: 400 });
  }

  const statusLabel = status === 'yes' ? '✅ Келеді / Придёт' : '❌ Келмейді / Не придёт';
  const message = [
    'Жаңа жауап / Новый ответ:',
    `Аты-жөні: ${name}`,
    `Статус: ${statusLabel}`,
  ].join('\n');

  const botUrl = process.env.BOT_URL;
  const secretKey = process.env.SECRET_KEY;

  if (!botUrl || !secretKey) {
    console.error('BOT_URL немесе SECRET_KEY орнатылмаған (.env файлын тексеріңіз).');
    return NextResponse.json({ error: 'bot_not_configured' }, { status: 500 });
  }

  try {
    const notifyRes = await fetch(`${botUrl}/notify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Secret-Key': secretKey,
      },
      body: JSON.stringify({ message }),
    });

    if (!notifyRes.ok) {
      const errText = await notifyRes.text();
      console.error('Bot notify қатесі:', errText);
      return NextResponse.json({ error: 'notify_failed' }, { status: 502 });
    }
  } catch (err) {
    console.error('Bot-қа сұраныс жіберу кезінде қате:', err);
    return NextResponse.json({ error: 'notify_request_error' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
