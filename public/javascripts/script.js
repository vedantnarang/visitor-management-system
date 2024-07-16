document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('visitor-form');
    const intime = document.getElementById('intime');
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const snap = document.getElementById('snap');
    const photo = document.getElementById('photo');
    const idCard = document.getElementById('id-card');
    const idPhoto = document.getElementById('id-photo');
    const idName = document.getElementById('id-name');
    const idPhone = document.getElementById('id-phone');
    const idPerson = document.getElementById('id-person');
    const idDepartment = document.getElementById('id-department-display');
    const idIntime = document.getElementById('id-intime');

    const departmentSelect = document.getElementById('department');
    const personSelect = document.getElementById('person');
    
    snap.addEventListener('click', () => {
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL('image/png');
        photo.value = imageData; // Set the value of the hidden input field for photo
        idPhoto.src = imageData; // Update the preview of the ID card photo
    });
    

    departmentSelect.addEventListener('change', function() {
        const selectedDepartment = this.value;

        Array.from(personSelect.options).forEach(option => {
            if (option.dataset.department) {
                option.hidden = option.dataset.department !== selectedDepartment;
            } else {
                option.hidden = false; // Show the placeholder option
            }
        });

        personSelect.value = '';
    });
    

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error("Error accessing webcam: ", err);
        });

    snap.addEventListener('click', () => {
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        photo.value = canvas.toDataURL('image/png');
        idPhoto.src = canvas.toDataURL('image/png');
    });

    form.addEventListener('submit', event => {
        if (!photo.value) {
            alert('Photo is required.');
            event.preventDefault();
            return;
        }

        event.preventDefault();

        const now = new Date();
        intime.value = now.toLocaleString();

        idName.textContent = form.name.value;
        idPhone.textContent = form.phone.value;
        idPerson.textContent = personSelect.options[personSelect.selectedIndex].text;
        idDepartment.textContent = departmentSelect.options[departmentSelect.selectedIndex].text;
        idIntime.textContent = intime.value;
        idCard.style.display = 'block';

        window.print();
        idCard.style.display = 'none';
    });
});
