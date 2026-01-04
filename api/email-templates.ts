/**
 * Premium Email Templates for PetPal Waitlist
 * Ultra-luxury brand aesthetic matching the PetPal design system
 */

// Brand colors from design system
const BRAND_COLORS = {
  primary: '#9333ea', // Purple
  primaryDark: '#7c3aed',
  cream: '#faf9f7',
  creamDark: '#f5f3f0',
  text: '#1a1a1a',
  textMuted: '#6b7280',
  border: '#e5e7eb',
};

/**
 * Premium notification email template (sent to owner)
 */
export function getOwnerNotificationEmail(data: {
  name: string;
  email: string;
  phone: string;
  date: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Waitlist Signup</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.primaryDark} 100%); padding: 40px 40px 30px; text-align: center;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <div style="width: 56px; height: 56px; background-color: rgba(255, 255, 255, 0.2); border-radius: 14px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                      <span style="font-size: 28px; color: #ffffff;">🐾</span>
                    </div>
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">New Waitlist Signup</h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Intro -->
              <p style="margin: 0 0 32px; color: ${BRAND_COLORS.text}; font-size: 16px; line-height: 24px;">
                Someone new has joined the PetPal waitlist! 🎉
              </p>

              <!-- Details Card -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${BRAND_COLORS.cream}; border-radius: 12px; border: 1px solid ${BRAND_COLORS.border}; margin-bottom: 32px;">
                <tr>
                  <td style="padding: 32px;">
                    
                    <!-- Name -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p style="margin: 0; color: ${BRAND_COLORS.text}; font-size: 18px; font-weight: 600; line-height: 28px;">${data.name}</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Email -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="mailto:${data.email}" style="color: ${BRAND_COLORS.primary}; text-decoration: none; font-size: 16px; font-weight: 500; line-height: 24px;">${data.email}</a>
                        </td>
                      </tr>
                    </table>

                    <!-- Phone -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 24px;">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="tel:${data.phone}" style="color: ${BRAND_COLORS.text}; text-decoration: none; font-size: 16px; font-weight: 500; line-height: 24px;">${data.phone}</a>
                        </td>
                      </tr>
                    </table>

                    <!-- Date -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding-bottom: 8px;">
                          <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Date & Time</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <p style="margin: 0; color: ${BRAND_COLORS.text}; font-size: 16px; font-weight: 500; line-height: 24px;">${data.date}</p>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>
              </table>

              <!-- Quick Actions -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center" style="padding-bottom: 24px;">
                    <a href="mailto:${data.email}?subject=Welcome to PetPal!" style="display: inline-block; background-color: ${BRAND_COLORS.primary}; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-size: 15px; font-weight: 600; letter-spacing: 0.3px;">Reply to ${data.name.split(' ')[0]}</a>
                  </td>
                </tr>
              </table>

              <!-- Footer -->
              <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 14px; line-height: 20px; text-align: center;">
                This email was automatically sent from your PetPal waitlist form.
              </p>

            </td>
          </tr>

          <!-- Bottom Border -->
          <tr>
            <td style="background-color: ${BRAND_COLORS.cream}; height: 4px;"></td>
          </tr>

        </table>

        <!-- Footer Text -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; margin-top: 24px;">
          <tr>
            <td align="center">
              <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 12px; line-height: 18px;">
                PetPal • petpal24.co.uk
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Premium welcome email template (sent to user who signed up)
 */
export function getWelcomeEmail(data: { name: string }) {
  const firstName = data.name.split(' ')[0];
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to PetPal</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f9fafb; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
          
          <!-- Header with Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.primaryDark} 100%); padding: 48px 40px; text-align: center;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                <tr>
                  <td align="center">
                    <div style="width: 64px; height: 64px; background-color: rgba(255, 255, 255, 0.2); border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; backdrop-filter: blur(10px);">
                      <span style="font-size: 32px; color: #ffffff;">🐾</span>
                    </div>
                    <h1 style="margin: 0 0 12px; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px; line-height: 40px;">Welcome to PetPal, ${firstName}! 🎉</h1>
                    <p style="margin: 0; color: rgba(255, 255, 255, 0.95); font-size: 18px; line-height: 26px; font-weight: 400;">You're on the waitlist</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 48px 40px;">
              
              <!-- Main Message -->
              <p style="margin: 0 0 24px; color: ${BRAND_COLORS.text}; font-size: 18px; line-height: 28px; font-weight: 400;">
                Thank you for joining the PetPal community! We're thrilled to have you on this journey.
              </p>

              <p style="margin: 0 0 32px; color: ${BRAND_COLORS.text}; font-size: 16px; line-height: 26px;">
                You're now on our exclusive waitlist and will be among the first to know when PetPal launches. We're building something special for pet parents like you, and we can't wait to share it with you soon.
              </p>

              <!-- What's Next Card -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${BRAND_COLORS.cream}; border-radius: 12px; border: 1px solid ${BRAND_COLORS.border}; margin-bottom: 32px;">
                <tr>
                  <td style="padding: 32px;">
                    <h2 style="margin: 0 0 20px; color: ${BRAND_COLORS.text}; font-size: 20px; font-weight: 700; letter-spacing: -0.3px;">What's Next?</h2>
                    
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                      <tr>
                        <td style="padding-bottom: 20px; border-bottom: 1px solid ${BRAND_COLORS.border};">
                          <p style="margin: 0 0 8px; color: ${BRAND_COLORS.text}; font-size: 16px; font-weight: 600; line-height: 24px;">📱 Early Access</p>
                          <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 14px; line-height: 22px;">You'll receive an invitation to download PetPal before public launch.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 20px; padding-bottom: 20px; border-bottom: 1px solid ${BRAND_COLORS.border};">
                          <p style="margin: 0 0 8px; color: ${BRAND_COLORS.text}; font-size: 16px; font-weight: 600; line-height: 24px;">🎁 Exclusive Perks</p>
                          <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 14px; line-height: 22px;">Waitlist members get special benefits and features at launch.</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top: 20px;">
                          <p style="margin: 0 0 8px; color: ${BRAND_COLORS.text}; font-size: 16px; font-weight: 600; line-height: 24px;">💌 Updates & Insights</p>
                          <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 14px; line-height: 22px;">We'll keep you updated on our progress and share exclusive content.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 32px;">
                <tr>
                  <td align="center">
                    <a href="https://petpal24.co.uk" style="display: inline-block; background: linear-gradient(135deg, ${BRAND_COLORS.primary} 0%, ${BRAND_COLORS.primaryDark} 100%); color: #ffffff; text-decoration: none; padding: 16px 40px; border-radius: 8px; font-size: 16px; font-weight: 600; letter-spacing: 0.3px; box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);">Visit PetPal</a>
                  </td>
                </tr>
              </table>

              <!-- Personal Touch -->
              <p style="margin: 0 0 8px; color: ${BRAND_COLORS.text}; font-size: 16px; line-height: 26px; font-weight: 500;">
                We're building PetPal with love, for pet parents like you.
              </p>

              <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 15px; line-height: 24px;">
                See you soon,<br>
                <span style="color: ${BRAND_COLORS.text}; font-weight: 600;">The PetPal Team</span> 🐾
              </p>

            </td>
          </tr>

          <!-- Bottom Border -->
          <tr>
            <td style="background-color: ${BRAND_COLORS.cream}; height: 4px;"></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 40px; background-color: ${BRAND_COLORS.creamDark}; text-align: center;">
              <p style="margin: 0 0 16px; color: ${BRAND_COLORS.textMuted}; font-size: 14px; line-height: 20px;">
                <strong style="color: ${BRAND_COLORS.text};">PetPal</strong> • Your pet's happy, healthy life in one app
              </p>
              <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 12px; line-height: 18px;">
                petpal24.co.uk
              </p>
            </td>
          </tr>

        </table>

        <!-- Unsubscribe / Contact -->
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; margin-top: 24px;">
          <tr>
            <td align="center">
              <p style="margin: 0; color: ${BRAND_COLORS.textMuted}; font-size: 12px; line-height: 18px;">
                Questions? Reply to this email anytime • 
                <a href="https://petpal24.co.uk" style="color: ${BRAND_COLORS.primary}; text-decoration: none;">Visit our website</a>
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

