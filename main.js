const examples = [
    'example_for_emma','hello_world', 'interactive_controls', 'placing_stimuli_randomly', 'placing_stimuli_using_grids', 'using_the_cursor_callbacks', 'using_the_update_loop'
]
const leftScroller = document.getElementById("leftScroller");
const forCanvas = document.getElementById("forCanvas");
forCanvas.src = 'splash_screen.html';


for (let i = 0; i < examples.length; i++) {
    const div = document.createElement('div');
    div.setAttribute('id', 'exampleThumbNail');
    
    const img = document.createElement('img');
    img.src = "Textures/Thumbnails/LogoImage.png";
    div.appendChild(img);

    const fileName = document.createElement('div');
    fileName.innerHTML = examples[i];
    div.appendChild(fileName);



    div.addEventListener('click', function(){runExample(examples[i])})

    leftScroller.appendChild(div)
}

function reset(){
    document.head.innerHTML = ''
    const meta = document.createElement('meta')
    meta.setAttribute('charset', 'UTF-8')
    meta.setAttribute('name', 'viewport')
    meta.setAttribute('content', 'width=device-width, initial-scale=1.0')
    document.head.appendChild(meta)

    const title = document.createElement('title')
    title.innerHTML = "Interactive Search Toolbox Examples"
    document.head.appendChild(title)

    const scriptSrc = document.createElement('script')
    scriptSrc.setAttribute('src', 'IST.min.js')

    const styleSheet = document.createElement('link')
    styleSheet.setAttribute('href', 'styles.css')
    styleSheet.setAttribute('rel', 'stylesheet')
    styleSheet.setAttribute('type', 'text/css')
    
}

async function runExample(src) {
    forCanvas.setAttribute('style','background-color:#c7c7c7')
    //style="border-style: none;width: 100%; height: 120px;
    forCanvas.src = src + '.html';
    console.log(src,'.html')



}
