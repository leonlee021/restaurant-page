
const createMenuContent = (() => {
    const content = document.querySelector('.tabs-content');
    const menupageContent = document.createElement('div');
    menupageContent.setAttribute('id','menu');
    menupageContent.setAttribute('role','tabpanel');
    menupageContent.ariaLabel = "menu-label";
    menupageContent.classList.add("page");
    menupageContent.ariaHidden = "true";
    menupageContent.innerHTML = `
    <div class = "lyrics"> Yeah, stylin' though
    Dissin', but got pictures with me smilin' though
    All the things you need, you still want problems though
    All the things I know, I still been silent though
    Yeah, used to be at SilverCity Indigo
    Used to be in lunchroom, playin' dominoes
    I don't want to have to go to funerals        
    </div>
    <img src = "https://i1.sndcdn.com/artworks-000214963376-l9bnws-t500x500.jpg" width = "400" height = "auto">
    `;
    content.appendChild(menupageContent);
})();

export { createMenuContent };
