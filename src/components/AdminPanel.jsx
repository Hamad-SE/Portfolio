import { useEffect, useState } from 'react';

export default function AdminPanel() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        headers: {
          'x-admin-password': password
        }
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Incorrect password');
        }
        throw new Error('Failed to fetch messages');
      }
      
      const data = await response.json();
      setMessages(data);
      setIsAuthenticated(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <section id="admin-login" className="contact section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ maxWidth: '400px' }}>
          <div className="section-title text-center" style={{ paddingBottom: '30px' }}>
            <h2>Admin Login</h2>
            <p>Enter your secret password to view messages.</p>
          </div>
          
          <form onSubmit={handleLogin} className="php-email-form" style={{ padding: '30px', boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.12)', background: 'var(--surface-color)' }}>
            <div className="row gy-4">
              <div className="col-12">
                <input 
                  type="password" 
                  className="form-control" 
                  name="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              
              <div className="col-12 text-center">
                {loading && <div className="loading" style={{ display: 'block' }}>Checking...</div>}
                {error && <div className="error-message" style={{ display: 'block' }}>{error}</div>}
                
                <button type="submit" disabled={loading} style={{ background: 'var(--accent-color)', border: '0', padding: '10px 30px', color: 'var(--contrast-color)', transition: '0.4s', borderRadius: '50px', marginTop: '15px' }}>
                  Unlock Dashboard
                </button>
              </div>
            </div>
            <div className="mt-4 text-center">
              <a href="/" style={{ color: 'var(--heading-color)', fontSize: '14px', textDecoration: 'underline' }}>Return to Portfolio</a>
            </div>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section id="admin-panel" className="contact section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container section-title">
        <h2>Admin Panel</h2>
        <p>View the messages submitted through your portfolio's contact form.</p>
      </div>

      <div className="container">
        {messages.length === 0 && <p className="text-center mt-5">No messages received yet.</p>}
        
        {messages.length > 0 && (
          <div className="table-responsive" style={{ boxShadow: '0 0 24px 0 rgba(0, 0, 0, 0.12)', padding: '20px', borderRadius: '8px', background: 'var(--surface-color)' }}>
            <table className="table table-hover">
              <thead style={{ borderBottom: '2px solid var(--accent-color)' }}>
                <tr>
                  <th style={{ color: 'var(--heading-color)' }}>Date</th>
                  <th style={{ color: 'var(--heading-color)' }}>Name</th>
                  <th style={{ color: 'var(--heading-color)' }}>Email</th>
                  <th style={{ color: 'var(--heading-color)' }}>Subject</th>
                  <th style={{ color: 'var(--heading-color)' }}>Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg._id}>
                    <td style={{ whiteSpace: 'nowrap', color: 'var(--default-color)' }}>{new Date(msg.createdAt).toLocaleString()}</td>
                    <td style={{ color: 'var(--default-color)', fontWeight: 'bold' }}>{msg.name}</td>
                    <td style={{ color: 'var(--default-color)' }}><a href={`mailto:${msg.email}`}>{msg.email}</a></td>
                    <td style={{ color: 'var(--default-color)' }}>{msg.subject}</td>
                    <td style={{ color: 'var(--default-color)' }}>{msg.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        <div className="mt-5 text-center">
          <a href="/" className="btn btn-primary" style={{ background: 'var(--accent-color)', border: 'none', padding: '10px 24px', borderRadius: '50px' }}>
            Logout & Return to Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
