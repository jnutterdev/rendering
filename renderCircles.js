function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 

    let shapes = circles.map(function(i) {

        return `
        <div style="border-radius:${i.radius}px;background-color:${i.color};height:${i.radius}px;width:${i.radius}px;"></div>
        `;
    });
    return `
    <div class="text-center mt-5">
        ${shapes.join("")};
        </div>
        `
};


function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [{
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}