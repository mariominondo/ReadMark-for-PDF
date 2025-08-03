console.log("ReadMark Content Script loaded!");

/**
 * Extracts the page number from the URL hash and saves it to storage.
 */
function savePage() {
  // Task 1.1.6: Extract page number from the URL hash.
  // The hash looks like #page=5, so we get the string after "=".
  const pageNumber = parseInt(window.location.hash.split('=')[1]);

  // Check if we successfully got a valid page number.
  if (pageNumber && !isNaN(pageNumber)) {
    const url = window.location.href.split('#')[0]; // Get the URL without the hash.

    // Task 1.1.7: Save the URL and page number to chrome.storage.
    chrome.storage.local.set({ [url]: pageNumber }, () => {
      console.log(`ReadMark: Saved page ${pageNumber} for ${url}`);
    });
  }
}

// Task 1.1.5: Add an event listener for when the URL hash changes.
// This happens every time the user navigates to a new page in the PDF viewer.
window.addEventListener('hashchange', savePage);