const imgs = document.querySelectorAll('img')

imgs.forEach(img => {
  img.addEventListener('error', function handleError() {
    const defaultImg = 'https://github.com/azrmicael/icons/blob/15a3f8360b72613ce74f0415d62dc4f0b7b546dd/images/no-image.png?raw=true';

    img.src = defaultImg;
    img.alt = 'default';
    img.title = 'default';
  });
});