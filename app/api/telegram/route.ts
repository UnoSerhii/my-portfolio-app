import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, subject, message } = body;

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat_id = process.env.TELEGRAM_CHAT_ID;

  const text = `
🆕 НОВЕ ПОВІДОМЛЕННЯ З САЙТУ:
👤 Ім’я: ${name}
📧 Email: ${email}
📞 Телефон: ${phone}
📌 Послуга: ${subject}
📝 Повідомлення: ${message}
`;

  const telegramRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id,
        text,
        parse_mode: "HTML",
      }),
    }
  );

  if (!telegramRes.ok) {
    return NextResponse.json({ error: "Помилка надсилання" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
