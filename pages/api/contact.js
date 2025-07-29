export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone } = req.body;

  // Basic validation
  if (!name || !phone) {
    return res.status(400).json({ 
      success: false, 
      message: 'שם ומספר טלפון הם שדות חובה' 
    });
  }

  // Phone validation (Israeli format)
  const phoneRegex = /^0[0-9]{1,2}-?[0-9]{7}$/;
  if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
    return res.status(400).json({ 
      success: false, 
      message: 'מספר הטלפון לא תקין' 
    });
  }

  // Simulate processing delay
  setTimeout(() => {
    console.log('New contact form submission:', {
      name,
      phone,
      timestamp: new Date().toISOString()
    });
  }, 100);

  return res.status(200).json({ 
    success: true, 
    message: 'תודה! נחזור אליכם בהקדם האפשרי' 
  });
} 