'use server'

export async function processPayment(formData) {
  const amount = formData.get('amount')
  const recipient = formData.get('recipient')
  return { status: 'processed', amount, recipient, timestamp: new Date().toISOString() }
}

export async function checkFraud(formData) {
  const transactionId = formData.get('transactionId')
  return { status: 'clear', transactionId, risk: 'low', timestamp: new Date().toISOString() }
}
