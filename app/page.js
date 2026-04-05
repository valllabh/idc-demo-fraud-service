import { processPayment, checkFraud } from './actions'

export default function Home() {
  return (
    <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Acme Banking Services</h1>
      <p>Payment processing and fraud detection platform.</p>

      <section style={{ marginTop: '2rem' }}>
        <h2>Process Payment</h2>
        <form action={processPayment}>
          <input type="text" name="recipient" placeholder="Recipient" style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }} />
          <input type="number" name="amount" placeholder="Amount" style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }} />
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>Submit Payment</button>
        </form>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Fraud Check</h2>
        <form action={checkFraud}>
          <input type="text" name="transactionId" placeholder="Transaction ID" style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem' }} />
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>Check Fraud</button>
        </form>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Status</h2>
        <p>All services operational.</p>
      </section>
    </main>
  )
}
