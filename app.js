// app.js — application logic entry

import { initUIFeedback } from './ui.js';

window.addEventListener('DOMContentLoaded', () => {
  initUIFeedback();

  // expose existing global functions if needed
  if (typeof syncHeader === 'function') syncHeader();
  if (typeof show === 'function') show('home');
});
