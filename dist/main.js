
// typer for hello
window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i = 0; i < elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-rotate');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtRotate(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 10px solid #ffffff}";
	document.body.appendChild(css);
};

var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 1) || 1000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 200;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};
    

const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]')
}



window.addEventListener('scroll',()=> 
{
	let content = document.querySelector('.role');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;
	 if (contentPosition < screenPosition){
		content.classList.add('active')
	 }else {
			content.classList.remove('active');
		}
	 }
)

window.addEventListener('scroll',()=> 
{
	let content = document.querySelector('.roles');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;
	 if (contentPosition < screenPosition){
		content.classList.add('active')
	 }else {
			content.classList.remove('active');
		}
	 }
)


window.addEventListener('scroll',()=> 
{
	let content = document.querySelector('.roles-div');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;
	 if (contentPosition < screenPosition){
		content.classList.add('active-div')
	 }else {
			content.classList.remove('active-div');
		}
	 }
)

window.addEventListener('scroll',()=> 
{
	let content = document.querySelector('.roles-div-side');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;
	 if (contentPosition < screenPosition){
		content.classList.add('active-div-side')
	 }else {
			content.classList.remove('active-div-side');
		}
	 }
)

window.addEventListener('scroll',()=> 
{
	let content = document.querySelector('.roles-div-side-one');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;
	 if (contentPosition < screenPosition){
		content.classList.add('active-div-side-one')
	 }else {
			content.classList.remove('active-div-side-one');
		}
	 }
)

window.addEventListener('scroll',()=> 
{
	let content = document.querySelector('.roles-div-side-two');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight;
	 if (contentPosition < screenPosition){
		content.classList.add('active-div-side-two')
	 }else {
			content.classList.remove('active-div-side-two');
		}
	 }
)


const projects = [

	{
	title: "hallo",
	descr: "hallo",
	date: "March 2023",
	image: "/assets/bild2.jpg",
	imageTwo: "/assets/bild4.jpg",
	url: "https://127.0.0.1:5555/dist/projects.html"
	},
	{
	title: "serwas",
	descr: "serwas",
	date: "March 2023",
	image: "/assets/bild2.jpg",
	imageTwo: "/assets/bild3.jpg",
	url: "https://127.0.0.1:5555/dist/projects.html"
	},
	{
	title: "ciao",
	descr: "ciao",
	date: "March 2023",
	image: "/assets/bild2.jpg",
	imageTwo: "/assets/bild3.jpg",
	url: "https://127.0.0.1:5555/dist/projects.html"
	},
	{
	title: "bo",
	descr: "bo",
	date: "March 2023",
	image: "/assets/bild2.jpg",
	imageTwo: "/assets/bild3.jpg",
	url: "https://127.0.0.1:5555/dist/projects.html"
	},
	{
	title: "bu",
	descr: "bi",
	date: "March 2023",
	image: "/assets/bild2.jpg",
	imageTwo: "/assets/bild3.jpg",
	url: "https://127.0.0.1:5555/dist/projects.html"
	},
	{
	title: "bu",
	descr: "bi",
	date: "March 2023",
	image: "/assets/bild2.jpg",
	imageTwo: "/assets/bild3.jpg",
	url: "https://127.0.0.1:5555/dist/projects.html"
	},
	{
	title: "bu",
	descr: "bi",
	date: "March 2023",
	image: "/assets/bild2.jpg",
	imageTwo: "/assets/bild3.jpg",
	url: "https://127.0.0.1:5555/dist/projects.html"
	},
	{
	title: "hallo",
	descr: "hallo",
	date: "March 2023",
	image: "/assets/bild2.jpg",
	imageTwo: "/assets/bild3.jpg",
	url: "https://127.0.0.1:5555/dist/projects.html"
	},
	{
	title: "serwas",
	descr: "serwas",
	date: "March 2023",
	image: "/assets/bild2.jpg",
	imageTwo: "/assets/bild3.jpg",
	url: "https://127.0.0.1:5555/dist/projects.html"
	},
	{
	title: "ciao",
	descr: "ciao",
	date: "March 2023",
	image: "/assets/bild2.jpg",
	imageTwo: "/assets/bild3.jpg",
	url: "https://127.0.0.1:5555/dist/projects.html"
	},
	
]

console.log(projects)

const cards = document.getElementById('cards')


projects.forEach((project, index)=>{
	let card = document.createElement('div')
	card.classList.add('project-card')
	cards.appendChild(card)
	let itemHead = document.createElement('h2');
	let itemHeadText = document.createTextNode(`${project.title}`)
	itemHead.appendChild(itemHeadText)
	card.appendChild(itemHead)
	let itemDescr = document.createElement('p');
	let itemDescrText = document.createTextNode(`${project.descr}`)
	itemDescr.appendChild(itemDescrText)
	card.appendChild(itemDescr)
	let itemDate = document.createElement('span');
	let itemDateText = document.createTextNode(`${project.date}`)
	itemDate.appendChild(itemDateText)
	card.appendChild(itemDate)
	let figure = document.createElement('figure')
	card.appendChild(figure)
	let imageDiv = document.createElement('div')
	imageDiv.classList.add('img-area')
	figure.appendChild(imageDiv)
	let itemImage = document.createElement('img');
	itemImage.setAttribute('src', `${project.image}`)
	itemImage.classList.add('img-back')
	imageDiv.appendChild(itemImage)
	let itemImageTwo = document.createElement('img');
	itemImageTwo.setAttribute('src', `${project.imageTwo}`)
	itemImageTwo.classList.add('img-front')
	imageDiv.appendChild(itemImageTwo)
	let divFb = document.createElement('div')
	card.appendChild(divFb)
	divFb.classList.add('fb-share-button')
	divFb.setAttribute('data-href', `${project.url}`)
	divFb.setAttribute('data-layout', ``)
	divFb.setAttribute('data-size', ``)
	let a = document.createElement('a')
	divFb.appendChild(a)
	a.setAttribute('target', `_blank`)
	a.setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse`)
	a.classList.add('fb-xfbml-parse-ignore')
	let aText = document.createTextNode(`Share`)
	a.appendChild(aText)


	
})

