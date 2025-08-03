# ReadMark: Your Automatic PDF Page Marker

**Never lose your place in a PDF document again. ReadMark is a lightweight browser extension that automatically saves your last viewed page and instantly returns you to it on your next visit.**

---

### Short Description

Reading long PDF documents in your browser can be frustrating. You close the tab and your position is lost. ReadMark solves this single problem with a "fire-and-forget" solution: it seamlessly bookmarks your page in the background, ensuring your reading flow is never interrupted.

### ✨ Key Features

* **Automatic Page Saving:** No need to click any buttons. Your progress is saved the moment you turn a page.
* **Instant Page Restore:** Opens your PDF documents exactly where you left off.
* **Lightweight & Fast:** Built to be unobtrusive and have no impact on your browser's performance.
* **Privacy-Focused:** All data is stored locally on your browser. Nothing is ever sent to a server.
* **PDF Focused:** Activates only on PDF files, staying out of your way everywhere else.

### ⚙️ How It Works

ReadMark leverages the native capabilities of modern Chromium-based browsers (like Google Chrome, Brave, and Edge).

1.  **Page Detection:** It monitors the URL for a hash change (e.g., `document.pdf#page=5`), which the browser's native PDF viewer uses to track the current page.
2.  **Local Storage:** When a page change is detected, ReadMark saves the page number and the PDF's URL into your browser's local storage using the `chrome.storage` API.
3.  **Automatic Restoration:** The next time you open that same PDF, the extension checks if a saved page exists for that URL and automatically navigates you there.

### 🚀 Installation

#### From the Official Store (Once Published)
1.  Go to the [Chrome Web Store / Brave Extensions Store link].
2.  Click "Add to Browser".
3.  That's it! The extension will start working immediately.

#### Manual Installation for Development
1.  Clone this repository: `[git clone https://github.com/your-username/ReadMark.git](https://github.com/mariominondo/ReadMark-for-PDF)`
2.  Open your browser and navigate to `chrome://extensions` or `brave://extensions`.
3.  Enable "Developer mode" (usually a toggle in the top-right corner).
4.  Click "Load unpacked".
5.  Select the cloned `ReadMark-for-PDF` directory.

### 🤝 How to Contribute

Contributions are welcome! Whether it's a bug report, a feature request, or a pull request, your input is valuable.

1.  **Fork** the repository.
2.  Create a new branch: `git checkout -b feature/your-new-feature`.
3.  Make your changes and commit them: `git commit -m 'Add some amazing feature'`.
4.  Push to your branch: `git push origin feature/your-new-feature`.
5.  Open a **Pull Request**.

---

MIT License © Mario Minondo
