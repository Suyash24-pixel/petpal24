import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { getOwnerNotificationEmail, getWelcomeEmail } from './email-templates.js';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  // Handle CORS
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone } = request.body;

  // Validate required fields
  if (!name || !email || !phone) {
    return response.status(400).json({ error: 'Missing required fields' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return response.status(400).json({ error: 'Invalid email address' });
  }

  const timestamp = new Date().toISOString();
  const formattedDate = new Date(timestamp).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/London',
  });

  try {
    // Log the data (always log for debugging)
    console.log('Waitlist signup:', {
      name,
      email,
      phone,
      timestamp,
    });

    // Send email notification if Resend is configured
    if (resend && process.env.WAITLIST_EMAIL) {
      try {
        const fromEmail = process.env.RESEND_FROM_EMAIL || 'PetPal <noreply@petpal24.co.uk>';
        const waitlistEmail = process.env.WAITLIST_EMAIL;
        
        // Send notification email to owner (always send if configured)
        await resend.emails.send({
          from: fromEmail,
          to: waitlistEmail,
          subject: 'New Waitlist Signup 🐾',
          html: getOwnerNotificationEmail({
            name,
            email,
            phone,
            date: formattedDate,
          }),
        });
        console.log('Owner notification email sent successfully');

        // Send welcome email to user (optional - controlled by SEND_WELCOME_EMAIL)
        if (process.env.SEND_WELCOME_EMAIL === 'true') {
          try {
            await resend.emails.send({
              from: fromEmail,
              to: email,
              subject: 'Welcome to PetPal! You\'re on the list 🎉',
              html: getWelcomeEmail({ name }),
            });
            console.log('Welcome email sent successfully');
          } catch (welcomeEmailError) {
            // Log but don't fail - welcome email is optional
            console.error('Error sending welcome email:', welcomeEmailError);
          }
        }
      } catch (emailError) {
        // Log email error but don't fail the request
        console.error('Error sending email notification:', emailError);
        // Continue execution - user still sees success message
      }
    } else {
      console.log('Email notifications not configured. Add RESEND_API_KEY and WAITLIST_EMAIL environment variables to enable.');
    }
    
    return response.status(200).json({
      success: true,
      message: 'Successfully added to waitlist',
    });
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
}


