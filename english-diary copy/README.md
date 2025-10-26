# English Diary Viewer

Korean-English bilingual diary viewer with mobile-first design.

## Features

- 📱 **Mobile-Optimized**: Single view (Korean only) on mobile devices
- 💻 **Desktop Dual View**: Side-by-side Korean and English on larger screens
- 🍔 **Hamburger Menu**: Easy navigation on mobile
- 🔍 **Translation Popup**: Click button to see English translation with character animation
- 🌓 **Dark Mode**: Auto/Light/Dark theme support
- ⚙️ **Customizable**: Font, size, spacing, and layout settings

## GitHub Pages Deployment

### 1. Generate File List

Before deploying, generate the file list:

```bash
node generate-file-list.js
```

This creates `files.js` containing all JSON file paths.

### 2. Deploy to GitHub Pages

1. Push your code to GitHub repository
2. Go to repository **Settings** → **Pages**
3. Select **Source**: Deploy from a branch
4. Select **Branch**: `main` (or your branch) → `/root`
5. Click **Save**

Your site will be available at: `https://[username].github.io/[repository-name]/`

### 3. Update Content

When you add/remove JSON files in the `data/` directory:

```bash
node generate-file-list.js
git add files.js
git commit -m "Update file list"
git push
```

## File Structure

```
.
├── index.html          # Main HTML file (no server needed)
├── files.js            # Auto-generated file list
├── generate-file-list.js  # Script to generate files.js
├── data/               # JSON diary files
│   ├── daily-routine/
│   ├── food/
│   ├── opic/
│   └── ...
└── README.md
```

## JSON File Format

```json
{
  "title": "Title of the diary entry",
  "diary": {
    "korean": [
      "한글 문장 1",
      "한글 문장 2"
    ],
    "english": [
      "English sentence 1",
      "English sentence 2"
    ]
  }
}
```

## Mobile Usage

1. **Open hamburger menu** (☰) to select category
2. **Select a category** → sidebar closes automatically
3. **Click a file chip** to view content
4. **Click 🔍 button** at the end of Korean sentence to see translation popup
   - Korean text at top
   - English translation below with character animation
   - Click anywhere to close

## Desktop Usage

1. Select category from sidebar
2. Toggle between Dual View / Single View
3. Right-click on Korean text for quick translation
4. Use Settings (⚙️) to customize appearance

## Keyboard Shortcuts

- `Ctrl/Cmd + K`: Toggle settings
- `Ctrl/Cmd + L`: Toggle layout (desktop only)
- `←` / `→`: Navigate between files
- `Esc`: Close settings

## Development

No build process or dependencies required! Just plain HTML, CSS, and JavaScript.

To test locally:
- Open `index.html` in a browser, or
- Use a local server: `python -m http.server 8000`

## License

MIT
