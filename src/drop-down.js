export const toggleDropDown = () => {
  const dropDownMenu = document.querySelector('.drop-down-menu');
  dropDownMenu.style.display =
    dropDownMenu.style.display === 'block' ? 'none' : 'block';
};
