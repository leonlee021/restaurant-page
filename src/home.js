const createHomepageContent = (() => {
    const content = document.querySelector('.tabs-content');
    const homepageContent = document.createElement('div');

    homepageContent.classList.add("tab-content");
    homepageContent.innerHTML = `
    <div id = "home" class = "page is-active"> 
        <div class = "lyrics"> Lemme get a lemon pepper order, please You gotta have the link before you order these Dockin 
        jet skis in the Florida Keys We all grateful for Weezy, but no one more than me You just found a bottle with the messages 
        These days, fame is disconnected from excellence 
        </div>
        <img src = "https://i.scdn.co/image/ab67616d0000b2738b20e4631fa15d3953528bbc" width = "400" height = "auto">
    </div>
    `;
    content.appendChild(homepageContent);
})();

export { createHomepageContent };