const loadTabs = () => {
    const content = document.querySelector(".content");
    const header = document.createElement("header");
    header.innerHTML = `
    <h1>Lemon Pepper Freestyle</h1>
    <div id = "tabs">
        <ul class = "tabs" data-tabs id = "home-tab">
            <li class = "tabs-title is-active"><a href = "#home" aria-selected = "true"> Home </a></li>
            <li class = "tabs-title"><a href = "#menu"> Menu </a></li>
            <li class = "tabs-title"><a href = "#contactus"> Contact us </a></li>
        </ul>
        // <div class = "tabs-content" data-tabs-content = "tabs">
        //     <div class = "tabs-panel is-active" id = "home">
        //     </div>
        //     <div class = "tabs-panel"  id = "menu">

        //     </div>

        //     <div class = "tabs-panel" id = "contactus">

        //     </div>
    </div>
    `
    content.appendChild(header);
    return content;
}

export default loadTabs;