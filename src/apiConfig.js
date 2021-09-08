let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === 'localhost') {
  backendHost = 'http://pearsystem.in/emireum-api/public';
} else {
  backendHost = 'http://pearsystem.in/emireum-api/public';
}

export const API_ROOT = `${backendHost}`;