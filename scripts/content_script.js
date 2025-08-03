// Log to confirm the content script is loaded and running on the page.
console.log("ReadMark Content Script loaded!");

/**
 * Extracts the page number from the URL hash and saves it to storage.
 * This function is triggered whenever the user navigates to a new page.
 */
function savePage() {
  // The hash looks like #page=5, so we get the string after "=".
  const pageNumber = parseInt(window.location.hash.split('=')[1]);

  // Check if we successfully extracted a valid number.
  if (pageNumber && !isNaN(pageNumber)) {
    // Get the base URL of the PDF, removing any existing hash.
    const url = window.location.href.split('#')[0];

    // Save the URL and its corresponding page number to local storage.
    chrome.storage.local.set({ [url]: pageNumber }, () => {
      console.log(`ReadMark: Saved page ${pageNumber} for ${url}`);
    });
  }
}

/**
 * Checks for a saved page in storage and navigates to it upon loading the PDF.
 */
function restorePage() {
  const url = window.location.href.split('#')[0];

  // Retrieve the saved page number for the current PDF's URL.
  chrome.storage.local.get([url], (result) => {
    const savedPage = result[url];

    // If a saved page number exists, navigate to it.
    if (savedPage) {
      console.log(`ReadMark: Found saved page ${savedPage}, restoring session.`);
      window.location.hash = `#page=${savedPage}`;
    }
  });
}

// --- Main Execution Logic ---

// Listen for page navigation to save the user's progress.
window.addEventListener('hashchange', savePage);

// Attempt to restore the last session as soon as the script loads.
restorePage();