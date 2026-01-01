# Troubleshooting White Screen

If you're seeing a white screen, follow these steps:

## 1. Install Dependencies
Make sure you've run:
```bash
npm install
```

## 2. Start Development Server
```bash
npm run dev
```

## 3. Check Browser Console
Open your browser's developer tools (F12) and check the Console tab for any JavaScript errors.

## 4. Verify Port
The app should run on http://localhost:3000 (or the port shown in terminal)

## 5. Common Issues

### Issue: White screen with no errors
- Check if the terminal shows the Vite server is running
- Try clearing browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check if node_modules folder exists (if not, run `npm install`)

### Issue: Port already in use
- Change the port in `vite.config.js` or kill the process using port 3000

### Issue: Module not found errors
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

## 6. Verify File Structure
Make sure all files are in the correct locations:
- `index.html` in root
- `src/main.jsx` exists
- `src/App.jsx` exists
- All component files exist in `src/components/`

## 7. Check Browser Support
Make sure you're using a modern browser (Chrome, Firefox, Edge, Safari)
