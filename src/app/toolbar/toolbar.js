const toggleMenu = () => {
    let menu;
    menu = document.getElementById("sa-app--desktop-sidebar")
    menu.classList = "sa-app sa-app--desktop-sidebar-shown sa-app--toolbar-fixed sa-app--mobile-sidebar-shown";
    console.log("toggle press", menu)
}

export {
  toggleMenu
}
