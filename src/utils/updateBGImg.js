




function updateBackgroundImage(newImageUrl) {
    const mainElement = document.querySelector('.main');
    mainElement.style.backgroundImage = `url(${newImageUrl})`;
  }
  

  

export { updateBackgroundImage };