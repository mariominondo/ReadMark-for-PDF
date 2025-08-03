document.addEventListener('DOMContentLoaded', () => {
  const statusText = document.getElementById('status-text');
  const forgetButton = document.getElementById('forget-button');
  let currentUrl = '';

  // Query for the active tab to get the URL
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0] && tabs[0].url) {
      // Get the base URL without the hash
      currentUrl = tabs[0].url.split('#')[0];

      // Check if it's a PDF file
      if (currentUrl.endsWith('.pdf')) {
        // Retrieve saved page data for this URL
        chrome.storage.local.get([currentUrl], (result) => {
          const savedPage = result[currentUrl];
          if (savedPage) {
            statusText.textContent = `Saved at page ${savedPage}.`;
            forgetButton.classList.remove('hidden'); // Show the button
          } else {
            statusText.textContent = 'No progress saved for this PDF.';
          }
        });
      } else {
        statusText.textContent = 'This is not a PDF file.';
      }
    }
  });

  // Add click listener for the "Forget" button
  forgetButton.addEventListener('click', () => {
    if (currentUrl) {
      // Remove the entry from storage
      chrome.storage.local.remove(currentUrl, () => {
        statusText.textContent = 'Saved page has been forgotten.';
        forgetButton.classList.add('hidden'); // Hide the button again
        console.log(`ReadMark: Removed progress for ${currentUrl}`);
      });
    }
  });
});