document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() =>{
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contact__iframe"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d992.6948310512506!2d-75.82024273051002!3d5.599586334354437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMzUnNTguNSJOIDc1wrA0OScxMC42Ilc!5e0!3m2!1ses!2sco!4v1710714490922!5m2!1ses!2sco" width="600" ></iframe>
    `;
    }, 500);
    
});