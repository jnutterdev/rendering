function renderNametags(nametags) {
    let namesHTML = nametags.map(function(nametag) {
        return `
        <div class="nametag">
            <div class="nametag-header">Hello, my name is:</div>
            <div class="nametag-body">
                <h1>${nametag}</h1>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="text-center mt-5">
        ${namesHTML}
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
        "Kamilah",
        "Kim",
        "Stuart",
        "Ron",
        "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}