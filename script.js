function Fruitsobj(name, title, types, img, desc){
    this.name = name;
    this.title = title;
    this.types = types;
    this.img = img;
    this.desc = desc;
}

var obj1 = new Fruitsobj("Mango",  "King of Fruits", "Langra, Chonsa, Sindhri","./Assets/mangoo.jpg","Aam khayega?");
var obj2 = new Fruitsobj("Orange",  "khatta meetha", "Blood Orange, Mandarin Orange, Tangerine, Clementine","./Assets/orange.avif","kinnu");
var obj3 = new Fruitsobj("WaterMelon", "Laal hai", "Sugar Baby Watermelon,Tendersweet Watermelon,Jubilee Watermelon, Yellow Crimson Watermelon",  "Assets/melon.avif", "sara thela laal hai");
var obj4 = new Fruitsobj("Banana", "Kela malayi hai", "Cavendish Banana,Pisang Raja,Lady Finger Banana, Blue Java Banana",  "./Assets/banana.avif", "Pottasium ka khazana");
var obj5 = new Fruitsobj("Dates(Khajoor)", "Arab ki soghat", "Ajwa, sukkur wali, khajji",  "./Assets/dates.avif", "Complete food and Nutritions")
var obj6 = new Fruitsobj("Grewia asiatica <br> (phalsa)", "Garmi ka torr", "",  "./Assets/falsa.jpg" , "it's better to make juice of it")
console.log(obj1.desc);
var fruits = [obj1, obj2, obj3, obj4, obj5, obj6]
var list = document.getElementById("list");

function renderFruits() {
    list.innerHTML = "";
    fruits.forEach(function(data, ind) {
        var ele = `    
        <div class="lg:w-1/3 sm:w-1/2 p-4 shadow-emerald-400">
            <div class="flex relative h-[250px] sm:w-[400px] w-[300px]">
                <img src="${data.img}" alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center">
                <div id="${ind}" class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 overflow-scroll">
          
                    <h2 class="tracking-widest text-2xl title-font font-medium text-indigo-500 mb-1 line-height:1;">"${data.name}"</h2>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">"${data.title}"</h1>
                    <p class="leading-relaxed">${data.types}</p>
                    <p class="leading-relaxed">${data.desc}</p>
                    <div class="flex gap-40">
                    <button onclick="updateDesc(this)" class="h-10 w-24 border-4 rounded-2xl border-black">update</button>
                    <button onclick="deleteElement(this)" class="h-10 w-24 border-4 rounded-2xl border-black">del</button>
                    </div>
                </div>
            </div>
        </div>`;
        list.innerHTML += ele;
    });
}

function updateDesc(ele) {
    var index = ele.parentElement.parentElement.id;
    fruits[index].desc = prompt("Desc", );
    renderFruits();
}

function deleteElement(ele) {
    var index = ele.parentElement.parentElement.id;
    console.log(index);
    fruits.splice(index, 1);
    renderFruits();
}

renderFruits();

// // var fruits = [
// //     {
// //         name: "Mango",
// //         title: "King of Fruits",
// //         types: "Langra, Chonsa, Sindhri",
// //         img: "./Assets/mangoo.jpg", 
// //         desc: "Aam khayega?"
// //     },
// //     {
// //         name: "Orange",
// //         title: "khatta meetha",
// //         types: "Blood Orange, Mandarin Orange, Tangerine, Clementine",
// //         img: "./Assets/orange.avif",
// //         desc: "kinnu"
// //     },
// //     {
// //         name: "WaterMelon",
// //         title: "Laal hai",
// //         types: "Sugar Baby Watermelon,Tendersweet Watermelon,Jubilee Watermelon, Yellow Crimson Watermelon",
// //         img: "Assets/melon.avif",
// //         desc: "sara thela laal hai"
// //     }
// // ];

