import type { VercelRequest, VercelResponse } from '@vercel/node';

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

  try {
    // TODO: Add your data storage solution here
    // Options:
    // 1. Google Sheets API
    // 2. Send email notification
    // 3. Database (Vercel Postgres, MongoDB, etc.)
    // 4. Webhook to external service
    
    // For now, log the data (you can see it in Vercel function logs)
    console.log('Waitlist signup:', {
      name,
      email,
      phone,
      timestamp: new Date().toISOString(),
    });

    // In production, you would:
    // - Save to Google Sheets
    // - Send email notification
    // - Store in database
    // - Send webhook notification
    
    return response.status(200).json({
      success: true,
      message: 'Successfully added to waitlist',
    });
  } catch (error) {
    console.error('Error processing waitlist submission:', error);
    return response.status(500).json({ error: 'Internal server error' });
  }
}


