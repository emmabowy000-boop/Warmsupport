// Vercel serverless function to redirect to WhatsApp using WA_PHONE env var
module.exports = (req, res) => {
  const phone = process.env.WA_PHONE;
  if (!phone) {
    res.status(500).send('WhatsApp redirect not configured. Set the WA_PHONE environment variable.');
    return;
  }
  // preserve query string (e.g., ?text=hello)
  const qs = req.url && req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '';
  const target = `https://wa.me/${phone}${qs}`;
  res.writeHead(302, { Location: target });
  res.end();
};
