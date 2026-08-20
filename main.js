function createLinkButton(fileName) {
    const a = document.createElement('a')
    const codeImg = document.createElement('img')
    codeImg.src = "Textures/codeArrow.svg"
    codeImg.setAttribute('id', 'buttonImg')
    a.setAttribute('id', "button")
    a.setAttribute('target', '_blank')
    const url = "https://github.com/InteractiveSearchToolbox/Examples/blob/main/" + fileName + '.html'
    a.setAttribute('href', url)
    a.setAttribute('title', "View source code")
    a.appendChild(codeImg)
    return a
}


function createCards() {

    examples.sort((a, b) => a.title.localeCompare(b.title))


    for (let i = 0; i < examples.length; i++) {
        const proj = examples[i];

        const masterCard = document.createElement('div');
        masterCard.classList.add('card');

        const div = document.createElement('div');
        div.classList.add('exampleThumbNail');

        const img = document.createElement('img');
        img.classList.add('thumbnailCard');
        const imgSrc = proj.thumbnail;
        img.src = imgSrc;

        img.onerror = function () {
            img.onerror = null;
            img.src = "Textures/Thumbnails/LogoImage.png";
        };

        div.appendChild(img);

        const title = document.createElement('div');
        title.innerHTML = " " + proj.title
        title.classList.add('cardTitle');
        div.appendChild(title);


        const description = proj.description
        div.title = description

        const fileName = proj.filename

        div.addEventListener('click', function () {
            if (currentlySelected !== null) {
                currentlySelected.classList.remove("cardSelected");
            }

            currentlySelected = div
            currentlySelected.classList.add("cardSelected");

            runExample(fileName)
        })

        masterCard.appendChild(div)

        leftScroller.appendChild(masterCard)

        cards.push(masterCard)
    }
}


function runExample(src) {
    forCanvas.onload = function () {
        const button = createLinkButton(src);
        forCanvas.contentDocument.body.appendChild(button);
        forCanvas.onload = null;
    };

    forCanvas.src = src + '.html';


}


const searchBar = document.getElementById('searchBar');
const cards = [];

searchBar.addEventListener('input', () => {
  const query = searchBar.value.trim().toLowerCase();

  cards.forEach(card => {
    const title = card.querySelector('.cardTitle').textContent.trim().toLowerCase();
    const matches = title.includes(query);

    if(matches){
        card.style.display = 'flex';
    }else{
        card.style.display = 'none';
    }

  });
});

const examples = [
    {
        filename: 'physics_drag_and_drop',
        thumbnail: 'Textures/Thumbnails/physics_drag_and_drop.jpg',
        title: 'Physics: Drag and Drop',
        description: 'Use cursor to drag and drop objects utilising Rapier for real physics simulation.'
    },
    {
        filename: 'easy_does_it',
        thumbnail: 'Textures/Thumbnails/easy_does_it.jpg',
        title: 'Easy Does It - Experiment 1 (Effort)',
        description: 'Click and drag to rotate objects that vary in effort.'
    },
    {
        filename: 'example_for_emma',
        thumbnail: 'Textures/Thumbnails/example_for_emma.jpg',
        title: 'Click to Reveal',
        description: 'Click on objects to reveal them with the cursor!'
    },

    {
        filename: 'hello_world',
        thumbnail: 'Textures/Thumbnails/hello_world.jpg',
        title: 'Hello World!',
        description: 'Display basic hello world model in window.'
    },

    {
        filename: 'interactive_controls',
        thumbnail: 'Textures/Thumbnails/interactive_controls.jpg',
        title: 'Interactive Controls: Playground',
        description: 'Explore the different interactive controls the IST has available.'
    },

    {
        filename: 'placing_methods',
        thumbnail: 'Textures/Thumbnails/placing_methods.jpg',
        title: 'Object Placing Methods: Playground',
        description: 'Explore the different methods the IST has availble for randomly distributing objects within a scene.'
    },

    {
        filename: 'placing_stimuli_randomly',
        thumbnail: 'Textures/Thumbnails/placing_stimuli_randomly.jpg',
        title: 'Object Placing Methods (Random)',
        description: 'Explore the different methods the IST has availble for randomly distributing objects within a scene.'
    },

    {
        filename: 'placing_stimuli_using_grids',
        thumbnail: 'Textures/Thumbnails/placing_stimuli_using_grids.jpg',
        title: 'Object Placing Methods (Grids)',
        description: 'Explore the different methods the IST has availble for placing objects within a scene using grids.'
    },

    {
        filename: 'using_the_cursor_callbacks',
        thumbnail: 'Textures/Thumbnails/using_the_cursor_callbacks.jpg',
        title: 'Cursor Callbacks',
        description: "Explore how to use the IST's built-in call back functions for the cursor events."
    },

    {
        filename: 'using_the_update_loop',
        thumbnail: 'Textures/Thumbnails/using_the_update_loop.jpg',
        title: 'The Update Loop',
        description: "Explore how to easily integrate code into the update loop (animation loop) using the IST's built-in update loop call back function."
    },
]

let currentlySelected = null;
const leftScroller = document.getElementById("leftScroller");
const forCanvas = document.getElementById("forCanvas");
forCanvas.src = 'splash_screen.html';
createCards()


