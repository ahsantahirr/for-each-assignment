

var fruits = [
    {
        name: "Mango",
        title: "King of Fruits",
        types: "Langra, Chonsa, Sindhri",
        img: "./Assets/mangoo.jpg", 
        desc: "Aam khayega?"
    },
    {
        name: "Orange",
        title: "khatta meetha",
        types: "Blood Orange, Mandarin Orange, Tangerine, Clementine",
        img: "./Assets/orange.avif",
        desc: "kinnu"
    },
    {
        name: "WaterMelon",
        title: "Laal hai",
        types: "Sugar Baby Watermelon,Tendersweet Watermelon,Jubilee Watermelon, Yellow Crimson Watermelon",
        img: "Assets/melon.avif",
        desc: "sara thela laal hai"
    }
];

var list = document.getElementById("list");

function renderFruits() {
    list.innerHTML = "";
    fruits.forEach(function(data, ind) {
        var ele = `    
        <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative h-[250px] w-[400px]">
                <img src="${data.img}" alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center">
                <div id="${ind}" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-70">
          
                    <h2 class="tracking-widest text-2xl title-font font-medium text-indigo-500 mb-1 line-height:1;">"${data.name}"</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">"${data.title}"</h1>
                    <p class="leading-relaxed">${data.types}</p>
                    <p class="leading-relaxed">${data.desc}</p>
                    <button onclick="updateDesc(this)">update</button>
                    <button onclick="deleteElement(this)">del</button>
                </div>
            </div>
        </div>`;
        list.innerHTML += ele;
    });
}

function updateDesc(ele) {
    var index = ele.parentElement.id;
    fruits[index].desc = prompt("Desc");
    renderFruits();
}

function deleteElement(ele) {
    var index = ele.parentElement.id;
    fruits.splice(index, 1);
    renderFruits();
}

renderFruits();

