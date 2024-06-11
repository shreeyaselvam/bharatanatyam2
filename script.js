// $(window).load(function() {
//     console.log("hello");
//     $('#brochureGallery').carousel('pause');
// })

window.onload = function() {
    console.log("hello");
    
    var brochureGallery = document.getElementById('brochureGallery');
    brochureGallery.pause = true;
    // if (brochureGallery) {
    //     // Assuming the carousel method is available in vanilla JS
    //     // This will depend on how the carousel is implemented
    //     brochureGallery.pause();
    // }
};
