// Hide/Show the sidebar
const sidebarToggleBtn = document.getElementById('side-bar-toggle');
// Function to hide/show the sidebar element. Ensure that the layout adapts to keep its syling and take up the available space left by the hidden sidebar
sidebarToggleBtn.addEventListener('click', () => {
    const sideBar = document.getElementById('side-bar-div');
    sideBar.classList.toggle('sm:hidden');
    const mainGridTasks = document.getElementById('main-tasks-grid');
    mainGridTasks.classList.toggle('sm:col-span-full');
    // Creating a new element to show the sidebar. Toggle between hiding the 2 elements.
    const newSideBarToggleBtn = document.createElement('img');
    newSideBarToggleBtn.src = '/images/icon-show-sidebar.svg';
    newSideBarToggleBtn.classList = 'flex flex-col mt-auto fixed bottom-0 left-0 w-[56px] h-[48px] bg-[#635FC7] rounded-tr-[100px] rounded-br-[100px]';
    newSideBarToggleBtn.addEventListener('click', () => {
        sideBar.classList.toggle('sm:hidden');
        mainGridTasks.classList.toggle('sm:col-span-full');
        newSideBarToggleBtn.classList = 'hidden';
    });
    mainGridTasks.append(newSideBarToggleBtn);
});

// Sidebar on mobile
const logo = document.getElementById('mobile-logo');
logo.addEventListener('click', () => {
    const sideBar = document.getElementById('side-bar-div');
    const overlay = document.getElementById('backdrop'); 
    const mobileLogoDiv = document.getElementById('mobile-logo-div'); 
    sideBar.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    mobileLogoDiv.classList.toggle('z-50');
    const sideBarDivs = sideBar.querySelectorAll('div');
    sideBarDivs.forEach(div => div.classList.toggle('hidden'));
});

export { sidebarToggleBtn };