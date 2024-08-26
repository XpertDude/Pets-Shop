let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

// Initial display
showSlide(currentIndex);

// Ordering method 1
const dialog = document.getElementById('order-now');
const method = document.getElementById('method');
const orderBtn = document.getElementById('whatsappOrderBtn');
const closeBtn = document.getElementById('btn-exit');
const orderConf = document.getElementById('order-container');
const quantity = document.getElementById('quantity');
const petAge = document.getElementById('pet-age');
const itemTitle = document.querySelector('.item-title');
const shopIcon = document.getElementById('shop-icon');
const itemsContainer = document.getElementById('items-container');
let trackCart = 0;
function showItem() {
    itemsContainer.showModal();
}

function closeDialog() {
    dialog.close();
    document.body.style.filter = 'blur(0)';
}

const orderConfirmation = () => {
    const quantityVle = quantity.value;
    const petAgeVle = petAge.value;
    productName = itemTitle.textContent;
    dialog.showModal();
    document.body.style.filter = 'blur(5px)';

    orderConf.innerHTML = `
        <h3 style="color: #b57a4a; font-size: 25px; font-weight: bolder;">${productName}</h3>
        <p style="font-weight: bolder;">Quantity: <span style="font-weight: 500; color: #b57a4a;">${quantityVle}</span></p>
        <p style="font-weight: bolder;">Pet age: <span style="font-weight: 500; color: #b57a4a;">${petAgeVle}</span></p>
    `;
}

orderBtn.addEventListener('click', function() {
    const productName = itemTitle.textContent;
    const quantityVle = quantity.value;
    const petAgeVle = petAge.value;
    const phoneNumber = "+212773192006";
    const message = `Hello, I would like to order the following item:\n\n` +
                    `- Product Name: ${productName}\n` +
                    `- Quantity: ${quantityVle}\n` +
                    `- Pet Age: ${petAgeVle}\n\n` +
                    `Thank you!`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    dialog.close();
    document.body.style.filter = 'blur(0)';
});

closeBtn.addEventListener('click', closeDialog);
method.addEventListener('click', orderConfirmation);
