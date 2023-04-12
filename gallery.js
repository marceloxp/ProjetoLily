document.addEventListener('DOMContentLoaded', function () {
    var template = document.getElementById("item-template");
    var compiled = _.template(template.innerHTML);
    var images = [];
    for (let i = 1; i <= 1000; i++) {
        let image = `images/image-${i.toString().padStart(4, '0')}.jpg`;
        images.push({
            src: image
        });
    };
    const data = {
        images: images
    };
    var html = compiled(data);
    var container = document.querySelector('#grid-lily');
    container.innerHTML = html;

    lightboxImages();
});
