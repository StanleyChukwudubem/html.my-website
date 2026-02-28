const data = {
    name: "STANLEY CHUKWUDUBEM",
    roles: ["Expert Programmer", "Dog Food Producer"],
    skills: ["HTML", "CSS", "JavaScript"],
    links: [
        { name: "Facebook", url: "https://facebook.com" },
        { name: "Gmail", url: "mailto:yourname@gmail.com" }
    ],
    products: ["a.png", "b.png", "c.png"]
};

const app = document.getElementById('app');

// Function to create elements easily
function createElement(tag, props = {}, text = '') {
    const el = document.createElement(tag);
    Object.assign(el, props);
    if (text) el.textContent = text;
    return el;
}

// 1. Build Header
const header = createElement('header');
header.appendChild(createElement('h1', {}, data.name));
const nav = createElement('nav');
data.links.forEach(link => {
    const a = createElement('a', { href: link.url, target: '_blank' }, link.name);
    nav.appendChild(a);
});
header.appendChild(nav);

// 2. Build Hero Section (Programming)
const hero = createElement('section', { className: 'hero' });
const profileImg = createElement('img', { src: 'AB.png', alt: 'Stanley', className: 'profile-pic' });
const bio = createElement('div', { className: 'bio' });
bio.appendChild(createElement('h2', {}, data.roles[0]));
bio.appendChild(createElement('p', {}, `Mastering the web with ${data.skills.join(', ')}.`));

hero.append(profileImg, bio);

// 3. Build Business Section (Dog Food)
const business = createElement('section', { className: 'business' });
business.appendChild(createElement('h2', {}, data.roles[1]));
const gallery = createElement('div', { className: 'gallery' });

data.products.forEach(src => {
    const img = createElement('img', { src: src, className: 'food-img' });
    gallery.appendChild(img);
});
business.appendChild(gallery);

// 4. Render everything to the DOM
app.append(header, hero, business);

// 5. Add a simple JS Animation/Interaction
document.addEventListener('mousemove', (e) => {
    const depth = 20;
    const moveX = (e.pageX - window.innerWidth / 2) / depth;
    const moveY = (e.pageY - window.innerHeight / 2) / depth;
    profileImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
});