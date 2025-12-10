// Netlify function to redirect to WhatsApp using WA_PHONE env var
exports.handler = async function(event) {
  const phone = process.env.WA_PHONE;
  if (!phone) {
    return {
      statusCode: 500,
      body: 'WhatsApp redirect not configured. Set the WA_PHONE environment variable.'
    };
  }
  const qs = event.rawQueryString ? `?${event.rawQueryString}` : '';
  const location = `https://wa.me/${phone}${qs}`;
  return {
    statusCode: 302,
    headers: { Location: location },
    body: ''
  };
};
