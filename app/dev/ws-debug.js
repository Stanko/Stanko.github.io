// Create error dialog for displaying errors
const errorDialog = document.createElement('dialog');
errorDialog.classList.add('__error-dialog');
document.body.appendChild(errorDialog);

// Close dialog when clicking outside of it
errorDialog.addEventListener('click', (event) => {
  const rect = errorDialog.getBoundingClientRect();
  const isInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;

  if (!isInDialog) {
    errorDialog.close();
  }
});

// WebSocket reconnection configuration
const MAX_RECONNECT_INTERVAL = 60000; // Maximum delay: 1 minute
let reconnectInterval = 1000; // Initial delay: 1 second
let socket;

// Event handlers for different types of updates
const handlers = {
  refresh: () => {
    console.log('Reloading...');
    window.location.reload();
  },

  // Reload page when the current page changes
  'page-changed': (data) => {
    if (data.pathname === window.location.pathname) {
      console.log('Reloading...');
      window.location.reload();
    }
  },

  // Reload page when JavaScript files change
  'js-changed': () => {
    console.log('Reloading...');
    window.location.reload();
  },

  // Hot-reload CSS files without refreshing the page
  'css-changed': (data) => {
    const currentCSS = document.querySelector(`link[href^="${data.path}"]`);

    if (currentCSS) {
      const newCSS = document.createElement('link');
      newCSS.rel = 'stylesheet';
      newCSS.href = `${data.path}?t=${Date.now()}`; // Add timestamp to bust cache

      newCSS.onload = () => {
        console.log('CSS updated', data.path);

        currentCSS.remove(); // Use remove() instead of parentNode.removeChild()
      };

      document.head.appendChild(newCSS);
    }
  },

  // Display errors in a modal dialog
  error: (data) => {
    errorDialog.innerHTML = `
      <form method="dialog" class="__error-dialog__header">
        <b>${data.title}</b>
        <button class="__error-dialog__close">
          <svg viewBox="0 0 16 16" width="16" height="16">
            <path d="M 1 1 L 15 15 M 1 15 L 15 1" stroke="currentColor" stroke-width="2" fill="none" />
          </svg>
        </button>
      </form>
      <pre class="__error-dialog__code">${data.error}</pre>
    `;
    errorDialog.showModal();
  },
};

// Connect to WebSocket server with automatic reconnection
const connect = () => {
  socket = new WebSocket('ws://localhost:4321');

  // Reset reconnection delay on successful connection
  socket.addEventListener('open', () => {
    reconnectInterval = 1000;
  });

  // Handle incoming messages
  socket.addEventListener('message', (event) => {
    try {
      const data = JSON.parse(event.data);
      console.log('[WS]', data);

      // Execute the appropriate handler based on the message type
      if (handlers[data.type]) {
        handlers[data.type](data);
      }
    } catch (error) {
      console.error('Error with the websocket message', error, event.data);
    }
  });

  // Reconnect with exponential backoff when connection closes
  socket.addEventListener('close', () => {
    console.log(
      `WebSocket disconnected. Reconnecting in ${reconnectInterval}ms`
    );

    setTimeout(connect, reconnectInterval);
    // Increase reconnection delay (exponential backoff) up to the maximum
    reconnectInterval = Math.min(reconnectInterval * 2, MAX_RECONNECT_INTERVAL);
  });

  socket.addEventListener('error', (error) => {
    console.error('WebSocket error:', error);
  });
};

// Start the WebSocket connection
connect();
