const environmentUrls = new Map();

environmentUrls.set('localhost', 'http://localhost:8080');
environmentUrls.set('book-store-web99-6d23876735a0.herokuapp.com', 'https://book-demo-store99-375f6dcdd60f.herokuapp.com');

export default environmentUrls.get(window.location.hostname);