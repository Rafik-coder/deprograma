
const my_info = {
    "years_exp": 2,
    "num_projects": 9,
    "sat_clients": 3,
    "award": 0
}


const my_projects = [    
    {
        service: 'Website',
        url: 'https://heritageherbalsolutions.com/',
        name: 'HHSolutions',
        image: 'images/projects/hhs.png'
    },
    {
        service: 'Website',
        url: 'https://ydm.vercel.app/',
        name: 'YDM',
        image: 'images/projects/ydm.jpg'
    },
    {
        service: 'pos',
        url: '#',
        name: 'Multi-POS',
        image: 'images/projects/apptest.jpg'
    },
    {
        service: 'Mobile App',
        url: '#',
        name: 'HHSolutions',
        image: 'images/projects/hhapp.png'
    },
    {
        service: 'pos',
        url: '#',
        name: 'Uni-POS',
        image: 'images/projects/apptest.jpg'
    }
]

document.getElementById("y_exp").textContent = my_info.years_exp;
document.getElementById("h_clients").textContent = my_info.sat_clients;
document.getElementById("f_projs").textContent = my_info.num_projects;
document.getElementById("awards").textContent = my_info.award;

// Vars
let proj_container = document.getElementById("my-projects");
let num_websites = my_projects.filter(item => item['service'] === 'Website').length;
let num_mobile_apps = my_projects.filter(item => item['service'] === 'Mobile App').length;
let num_pos = my_projects.filter(item => item['service'] === 'pos').length;
let num_ecomerce = my_projects.filter(item => item['service'] === 'ecomerce').length;

let n_w = document.getElementById("num-websites");
let n_a = document.getElementById("num-apps");
let n_pos = document.getElementById("num-pos");
let n_eco = document.getElementById("num-ecomerce");

n_w.textContent = num_websites;
n_eco.textContent = num_ecomerce;
n_pos.textContent = num_pos;
n_a.textContent = num_mobile_apps;

my_projects.forEach(item => {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let small = document.createElement("span");
    let h3 = document.createElement("h3");
    let a = document.createElement("a");
    let img = document.createElement("img");
    let url = document.createElement("a");

    url.href = item.url
    url.target = "_blank";

    div1.classList.add("col-lg-4")
    div1.classList.add("col-md-6")
    div1.classList.add("col-12")
    div2.classList.add("projects-thumb");
    div3.classList.add("projects-info");

// -----------------------------------------------------------------
    small.classList.add("projects-tag")
    small.textContent = item.service;
    
    h3.classList.add("projects-title");
    h3.textContent = item.name;
    
    div3.appendChild(small);
    div3.appendChild(h3);    
    url.appendChild(div3)

// --------------------------------------------------------------------

    a.href = item.image;
    a.classList.add("popup-image");

    img.src = item.image;
    img.classList.add("projects-image")
    img.classList.add("img-fluid")

    a.appendChild(img)
// -----------------------------------------------------

    div2.appendChild(url);
    div2.appendChild(a);
    
    div1.appendChild(div2);

    proj_container.appendChild(div1)
    
})