document.addEventListener('DOMContentLoaded', (event) => {
  const copyCodeButtons = document.querySelectorAll('.copy-code-button');
  copyCodeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const codeBlock = button.nextElementSibling;
      const code = codeBlock.innerText;
      navigator.clipboard.writeText(code).then(() => {
        button.innerText = 'Copied!';
        setTimeout(() => {
          button.innerText = 'Copy';
        }, 2000);
      });
    });
  });
});
