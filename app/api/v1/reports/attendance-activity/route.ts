export const runtime = 'edge';
import { NextRequest, NextResponse } from 'next/server';

const BACKEND_ORIGIN = (() => {
  try {
    return new URL(process.env.BACKEND_BASE_URL || 'http://localhost:8080').origin;
  } catch {
    return 'http://localhost:8080';
  }
})();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const upstream = new URL(`${BACKEND_ORIGIN}/api/v1/reports/attendance-activity`);
  
  // Forward all query params
  searchParams.forEach((value, key) => {
    upstream.searchParams.set(key, value);
  });

  try {
    const res = await fetch(upstream.toString(), {
      method: 'GET',
      headers: {
        'Authorization': req.headers.get('Authorization') || '',
        'Content-Type': 'application/json',
      },
    });

    const text = await res.text();
    return new NextResponse(text, {
      status: res.status,
      headers: { 'Content-Type': res.headers.get('content-type') || 'application/json' },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Backend unavailable';
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
