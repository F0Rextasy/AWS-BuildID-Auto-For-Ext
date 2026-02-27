/**
 * i18n Helper - Automatically replaces text content with localized messages
 */

function initI18n() {
  // Replace all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const message = chrome.i18n.getMessage(key);
    if (message) {
      if (element.tagName === 'OPTION') {
        element.textContent = message;
      } else {
        element.textContent = message;
      }
    }
  });

  // Replace all placeholders with data-i18n-placeholder attribute
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const message = chrome.i18n.getMessage(key);
    if (message) {
      element.placeholder = message;
    }
  });

  // Replace all titles with data-i18n-title attribute
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const key = element.getAttribute('data-i18n-title');
    const message = chrome.i18n.getMessage(key);
    if (message) {
      element.title = message;
    }
  });

  // Update document title
  document.title = chrome.i18n.getMessage('extName') || 'AWS Auto Registration';
  
  // Update HTML lang attribute based on current locale
  const locale = chrome.i18n.getUILanguage();
  document.documentElement.lang = locale;
}

// Initialize on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
