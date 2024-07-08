let contrastToggle = false;
let modalOpen = false;
let aboutModalOpen = false;
let contactModalOpen = false;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX / 20;
    const y = event.clientY /20;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !==0;
        const boolInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInteger}px, ${y * boolInteger}px)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add("modal__overlay--visible");

    emailjs.sendForm(
            'service_el86y8s',
            'template_xzra4hd',
            event.target,
            'Tm6Iprbt_C_bjR5MN'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList.add("modal__overlay--visible");
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at dvdhyelee@gmail.com"
        )
    })
}

function toggleModal() {
    if (modalOpen) {
        modalOpen = !modalOpen;
        document.body.classList.remove("modal--open");
    } else {
        modalOpen = !modalOpen;
        document.body.classList.add("modal--open");
    }
}

function toggleAboutModal() {
    if (aboutModalOpen) {
        aboutModalOpen = !aboutModalOpen;
        document.body.classList.remove("modal__about--open");
    } else {
        aboutModalOpen = !aboutModalOpen;
        document.body.classList.add("modal__about--open");
    }
}

function toggleContactModal() {
    if (contactModalOpen) {
        contactModalOpen = !contactModalOpen;
        document.body.classList.remove("modal__contact--open");
    } else {
        contactModalOpen = !contactModalOpen;
        document.body.classList.add("modal__contact--open");
    }
}

function closeModal() {
    modalOpen = false;
    aboutModalOpen = false;
    contactModalOpen = false;
    document.body.classList.remove("modal--open");
    document.body.classList.remove("modal__about--open");
    document.body.classList.remove("modal__contact--open");
}

function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove('menu--open');
}