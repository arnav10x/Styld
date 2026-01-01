# Quick Start Guide

## Important: You MUST use the development server

**DO NOT** open `index.html` directly in your browser. It won't work!

## Steps to Run:

1. **Open terminal/command prompt in the `styld` folder**

2. **Install dependencies** (only needed once):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to the URL shown in the terminal (usually http://localhost:3000)

## If you see a white screen:

1. **Check the browser console** (Press F12, go to Console tab)
   - Look for any red error messages
   - Take a screenshot and share the error

2. **Check the terminal** where you ran `npm run dev`
   - Should show "VITE v5.x.x ready in xxx ms"
   - Should show "➜  Local:   http://localhost:3000/"

3. **Make sure you're not opening the HTML file directly**
   - Must use the dev server URL from terminal

4. **Try clearing browser cache**:
   - Press Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

## Common Errors:

### "Cannot find module" errors
→ Run `npm install` again

### "Port 3000 already in use"
→ Close other programs using that port, or change port in `vite.config.js`

### White screen with no errors
→ Check browser console (F12) for React errors
→ Make sure you're accessing via http://localhost:3000, not file://
