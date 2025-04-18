import './styles.css';
import { toggleDropDown } from './drop-down';

const dropDownToggle = document.querySelector('.drop-down-toggle');
dropDownToggle.addEventListener('click', toggleDropDown);
