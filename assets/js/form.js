document.getElementById('send-message').addEventListener('submit', function (event) {
    event.preventDefault();

    let userName = document.getElementById('name-inp').value;
    let typeMessage = document.getElementById('status').value;
    if (typeMessage === 'sos') {
        let arrImput = sos.querySelectorAll('input');

        arrImput.forEach(item => {
            console.log(item.value);
        })

    } else {
        let profession = document.getElementById('profession').value
        let arrImputProfi = help.querySelectorAll('input').forEach(item => {
            console.log(item.value);
        })
    }
    console.log(userName, typeMessage);
});

const sos = document.querySelector('.form-sos__none');
const help = document.querySelector('.form-help__none');
const statusMsg = document.querySelector('#status');
const contact = document.querySelector('#contact');

statusMsg.addEventListener('change', getTypeMessage);
contact.addEventListener('change', getInputContact);

function getTypeMessage() {

    switch (statusMsg.value) {
        case 'sos':
            sos.classList.remove('none');
            break;
        case 'help':
            help.classList.remove('none');
            sos.classList.add('none');
            const formHelp = document.querySelector('.form-help');
            break;
        case 'null':
            statusMsg.classList.add('none')
            break
    }
}

function getInputContact() {
    const email = document.querySelector('.email__none').classList.remove('none');
    const phone = document.querySelector('.phone__none').classList.remove('none');
    const tlgm = document.querySelector('.tlgm__none').classList.remove('none');
    const contact2 = document.querySelector('.contact__none')
    const arrImput = contact2.querySelectorAll('input');
    arrImput.forEach(item => {
        item.classList.add('none')
    })
    switch (contact.value) {
        case 'email':
            const email = document.querySelector('.email__none');
            email.classList.remove('none');
            break;
        case 'phone':
            const phone = document.querySelector('.phone__none');
            phone.classList.remove('none');
            break;
        case 'tlgm':
            const tlgm = document.querySelector('.tlgm__none');
            tlgm.classList.remove('none');
            break;
    }
}

