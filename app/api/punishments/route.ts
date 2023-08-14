import { Hypicle, HypicleError, getPunishments } from 'hypicle';
import { NextResponse } from 'next/server';

export async function GET() {
  const client = new Hypicle(process.env.HYPIXEL_API_KEY);

  try {
    const punishments = await getPunishments(client);

    const staff = {
      total: punishments.staff_total,
      daily: punishments.staff_rollingDaily,
    };

    const watchdog = {
      total: punishments.watchdog_total,
      daily: punishments.watchdog_rollingDaily,
      lastMinute: punishments.watchdog_lastMinute,
    };

    return NextResponse.json({ success: true, staff, watchdog });
  } catch (err) {
    const error = err as HypicleError;
    if (error.status === 429)
      return NextResponse.json({
        success: false,
        message: 'Key throttle. Please try again later.',
      });
    else
      return NextResponse.json({
        success: false,
        message: 'An error occurred while fetching data',
      });
  }
}
