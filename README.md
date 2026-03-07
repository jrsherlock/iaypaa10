# IAYPAA X PWA - From Muck to Miracle

🧪 **10th Annual Iowa Young People in AA Conference**  
📍 **Iowa City, IA 2026**

A Progressive Web App for conference attendees featuring:
- 📅 Full conference schedule
- ⭐ Personal schedule builder with drag-and-drop
- 🔍 Event search
- 📱 Add to home screen (installable PWA)
- 📴 Offline support
- 🎨 Primordial ooze themed design

---

## 🚀 Quick Start

### Local Development

1. **Start a local server:**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # OR using Node.js
   npx serve .
   
   # OR using PHP
   php -S localhost:8000
   ```

2. **Open in browser:**
   ```
   http://localhost:8000
   ```

3. **Test on mobile:**
   - Use your local network IP (e.g., `http://192.168.1.x:8000`)
   - Or use ngrok for HTTPS testing: `ngrok http 8000`

---

## 📱 Installation (Add to Home Screen)

### iOS (Safari)
1. Open the app URL in Safari
2. Tap the Share button (box with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Name it and tap "Add"

### Android (Chrome)
1. Open the app URL in Chrome
2. Tap the three-dot menu
3. Tap "Add to Home Screen" or "Install App"
4. Follow the prompts

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" > "main" > "/ (root)"
5. Your app will be available at `https://yourusername.github.io/repo-name/`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the folder to deploy
3. Get instant HTTPS URL

### Option 3: Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow prompts for instant deployment

### Option 4: Firebase Hosting (Free tier)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

### Option 5: Your Own Server
Upload files to any web server with HTTPS support.

**Important:** PWAs require HTTPS for service workers to function (except localhost).

---

## 📁 Project Structure

```
iaypaa-x-pwa/
├── index.html          # Main HTML file
├── styles.css          # Primordial ooze themed styles
├── app.js              # Main application logic
├── sw.js               # Service worker for offline support
├── manifest.json       # PWA manifest
├── images/
│   └── logo.jpg        # Conference logo
├── icons/
│   ├── icon-72.png     # App icons (various sizes)
│   ├── icon-96.png
│   ├── icon-128.png
│   ├── icon-144.png
│   ├── icon-152.png
│   ├── icon-192.png
│   ├── icon-384.png
│   └── icon-512.png
└── screenshots/        # App store screenshots (optional)
```

---

## 🎨 Customization

### Updating the Schedule
Edit the `scheduleData` object in `app.js`:

```javascript
const scheduleData = {
    friday: [
        {
            id: 'fri-1',
            time: '3:00 PM',
            endTime: '6:00 PM',
            title: 'Event Title',
            venue: 'grand-ballroom',
            venueLabel: 'Grand Ballroom',
            type: 'panel',
            description: 'Event description here.'
        },
        // ... more events
    ],
    saturday: [...],
    sunday: [...]
};
```

### Venue Types
- `grand-ballroom` (gold)
- `board-room` (blue)
- `hideout` (purple)
- `loft` (orange)
- `outside` (green)
- `registration` (default)

### Event Types
- `speaker`
- `panel`
- `meeting`
- `social`
- `registration`

### Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --ooze-dark: #1a2f1a;
    --gold-primary: #c9a227;
    /* ... etc */
}
```

---

## 📲 QR Code Generation

Generate a QR code pointing to your deployed URL using:
- [QR Code Generator](https://www.qr-code-generator.com/)
- [QR Code Monkey](https://www.qrcode-monkey.com/)

Print these on flyers, posters, and registration materials!

---

## 🔧 Technical Details

- **Framework:** Vanilla JavaScript (no dependencies)
- **Styling:** Custom CSS with CSS Variables
- **Storage:** localStorage for personal schedules
- **PWA:** Service Worker + Web App Manifest
- **Fonts:** Google Fonts (Creepster, Inter)

---

## 📞 Support

For technical issues with the app, contact the IAYPAA Host Committee.

Visit [iaypaa.org](https://iaypaa.org) for more information.

---

**From Muck to Miracle** 🧪✨

*We love you, lots and lots and lots!*  
*— IAYPAA X Host Committee*
