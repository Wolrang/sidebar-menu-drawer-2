const sidebarMenuButton = document.querySelector('.gnb-icon-button');
const sidebar  = document.querySelector('.sidebar');
const overlay  = document.querySelector('.overlay');

console.log(sidebarMenuButton, sidebar, overlay)

function openSidebar() {
  sidebar.classList.add('is-active');
  overlay.classList.add('is-active');
}

sidebarMenuButton.addEventListener('click', openSidebar);

function closeSidebar() {
  sidebar.classList.remove('is-active');
  overlay.classList.remove('is-active');
}

overlay.addEventListener('click', closeSidebar);

const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button');

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle('is-open');
}

drawerMenuButtonList.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', toggleDrawerMenu);
})

// drawerMenuButton[0].addEventListener('click', toggleDrawerMenu);
// drawerMenuButton[1].addEventListener('click', toggleDrawerMenu);
// drawerMenuButton[2].addEventListener('click', toggleDrawerMenu);