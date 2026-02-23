import { NextRequest, NextResponse } from 'next/server';
import { validateRegistration, hasErrors } from '@/lib/validation';
import type { RegistrationFormData, RegistrationPayload } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const data: RegistrationFormData = await request.json();
    const errors = validateRegistration(data);

    if (hasErrors(errors)) {
      return NextResponse.json(
        { success: false, message: 'Validation failed.', errors },
        { status: 400 }
      );
    }

    const payload: RegistrationPayload = {
      ...data,
      submittedAt: new Date().toISOString(),
      source: process.env.NEXT_PUBLIC_SITE_VARIANT || 'unknown',
    };

    console.log('[Registration] New lead:', JSON.stringify(payload, null, 2));

    if (process.env.RESEND_API_KEY) {
      try {
        await sendEmailNotification(payload);
      } catch (emailError) {
        console.error('[Registration] Email failed:', emailError);
      }
    }

    if (process.env.GOOGLE_SHEETS_ID && process.env.GOOGLE_PRIVATE_KEY) {
      try {
        await appendToGoogleSheets(payload);
      } catch (sheetsError) {
        console.error('[Registration] Google Sheets failed:', sheetsError);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Registration received successfully.',
    });
  } catch {
    console.error('[Registration] Server error');
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(payload: RegistrationPayload) {
  const commPrefs = [];
  if (payload.communicationPreference.phoneCall) commPrefs.push('Phone');
  if (payload.communicationPreference.email) commPrefs.push('Email');
  if (payload.communicationPreference.text) commPrefs.push('Text');

  const body = {
    from: 'Chelsea at Longwood <noreply@chelseaatlongwood.com>',
    to: [process.env.NOTIFICATION_EMAIL || 'info@askgreta.com'],
    subject: `New Registration: ${payload.fullName} — Chelsea at Longwood`,
    html: `
      <h2>New Registration — Chelsea at Longwood</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${payload.fullName}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${payload.email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${payload.phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Suite</td><td style="padding:8px;border:1px solid #ddd;">${payload.suitePreference}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Floor</td><td style="padding:8px;border:1px solid #ddd;">${payload.floorPreference}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Budget</td><td style="padding:8px;border:1px solid #ddd;">${payload.budget}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Contact Via</td><td style="padding:8px;border:1px solid #ddd;">${commPrefs.join(', ')}</td></tr>
        ${payload.notes ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Notes</td><td style="padding:8px;border:1px solid #ddd;">${payload.notes}</td></tr>` : ''}
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Source</td><td style="padding:8px;border:1px solid #ddd;">${payload.source}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Submitted</td><td style="padding:8px;border:1px solid #ddd;">${payload.submittedAt}</td></tr>
      </table>
    `,
  };

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Resend API error: ${res.status}`);
  }
}

async function appendToGoogleSheets(payload: RegistrationPayload) {
  const row = [
    payload.submittedAt,
    payload.fullName,
    payload.email,
    payload.phone,
    payload.suitePreference,
    payload.floorPreference,
    payload.budget,
    payload.communicationPreference.phoneCall ? 'Yes' : 'No',
    payload.communicationPreference.email ? 'Yes' : 'No',
    payload.communicationPreference.text ? 'Yes' : 'No',
    payload.notes,
    payload.source,
  ];

  console.log('[Google Sheets] Would append row:', row);
}
