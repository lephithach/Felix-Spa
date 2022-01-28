const btnNavbarShow = document.querySelector(".navbar-container .navbar-show");
const navbarWrapper = document.querySelector(
  ".navbar-container .navbar-wrapper"
);
const navbarList = document.querySelector(".navbar-container .navbar-list");

btnNavbarShow.onclick = (e) => {
  //   navbarWrapper.classList.toggle("show");
  navbarList.classList.toggle("show");
};
