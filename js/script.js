let badges = document.querySelectorAll('.kv-buch-chb__badge');
for (const badge of badges) {
    badge.addEventListener('click', (event) => {
        console.log('OLOL');
        event.stopPropagation();
        event.preventDefault();
        console.log('ZAZAZAZ');
    });
}


// MODULES
// include('./modules/_textarea.js');
// include('./modules/_da.js');
// include('./modules/_sliders.js');
// include('./modules/_media.js');
// MODULES

// UI
// include('./ui/_livesearch.js');
// include('./ui/_select.js');
// include('./ui/_scroll.js');
// include('./ui/_tippy.js');
// include('./ui/_drop.js');
// include('./ui/_accordeon.js');
// include('./ui/_tabs.js');
// include('./ui/_file-input.js');
// include('./ui/_popup.js');
// include('./ui/_mask.js');
// include('./ui/_validation.js');
// include('./ui/_show-pass.js');
// include('./ui/_ibg.js');
// include('./ui/_lazy.js');
// include('./ui/_colorpicker.js');
// include('./ui/_dashboard.js');
// include('./ui/_preload.js');
// include('./ui/_toast.js');
// UI

// COMPONENTS
// include('./components/_header.js');
// COMPONENTS

// include('./modules/_aos_script.js');
