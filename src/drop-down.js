export const InitDropDown = () => {
  const dropDownToggle = document.querySelector('.drop-down-toggle');
  dropDownToggle.addEventListener('click', toggleDropDown);

  const toggleDropDown = () => {
    const dropDownMenu = document.querySelector('.drop-down-menu');
    dropDownMenu.style.display =
      dropDownMenu.style.display === 'block' ? 'none' : 'block';
  };
};
