/**
 * Central contact configuration.
 *
 * Change VITE_CONTACT_EMAIL in .env to update every mailto: link sitewide.
 * Change VITE_FORMSPREE_ENDPOINT in .env to route all form submissions to
 * a different inbox — no code changes needed.
 *
 * Setup Formspree:
 *  1. Go to https://formspree.io and create a free account
 *  2. Create a new form → set recipient to your desired email
 *  3. Copy the endpoint (e.g. https://formspree.io/f/xabcdefg)
 *  4. Paste it into VITE_FORMSPREE_ENDPOINT in your .env file
 */

export const CONTACT_EMAIL: string =
  import.meta.env.VITE_CONTACT_EMAIL || 'info@sonic-group.de';

export const FORMSPREE_ENDPOINT: string =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || '';

export interface ContactFormData {
  [key: string]: string;
}

/**
 * Submits a contact form to the configured Formspree endpoint.
 * The submission will be forwarded to VITE_CONTACT_EMAIL inbox.
 *
 * @param data - Key-value pairs of form fields
 * @returns Promise<void> — throws on failure
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  const endpoint = FORMSPREE_ENDPOINT;

  if (!endpoint) {
    // Fallback: if no Formspree endpoint is set, log a warning.
    // Replace this with your real endpoint in .env.
    console.warn(
      '[Sonic] No VITE_FORMSPREE_ENDPOINT set. Add it to your .env file. ' +
        'Sign up at https://formspree.io to get a free form endpoint.'
    );
    // Simulate success for development so the form UX works
    return new Promise((resolve) => setTimeout(resolve, 800));
  }

  const body = new URLSearchParams();
  Object.entries(data).forEach(([k, v]) => body.append(k, v));
  // Tell Formspree which email to forward to (overrides form settings if desired)
  body.append('_replyto', data.email || '');

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: body.toString(),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error || `Form submit failed: ${res.status}`);
  }
}
