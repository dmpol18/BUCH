function resizeElement(containerClass, elmentClass, addClass, breakpoint) {
    let containers = document.querySelectorAll(containerClass);
    let elements;

    if (containers) {
        for (let i = 0; i < containers.length; i++) {
            let container = containers[i];

            if (containerClass === elmentClass || !elmentClass) {
                elements = document.querySelectorAll(containerClass);
            } else {
                elements = container.querySelectorAll(elmentClass);
            }

            if (elements) {
                for (let j = 0; j < elements.length; j++) {
                    let element = elements[j];

                    if (container.offsetWidth <= breakpoint) {
                        element.classList.add(addClass);
                    }
                    else if (element.classList.contains(addClass)) {
                        element.classList.remove(addClass);
                    }
                }
            }
        }
    }
}

['resize', 'load'].forEach(evt =>
    window.addEventListener(evt, () => {
        resizeElement('.kv-class-tabs', '.kv-class-tab', 'kv-class-tab_bp', 991);
        resizeElement('.kv-class-tab', '.kv-class-tab__title', 'kv-class-tab__title_hidden', 94);
        resizeElement('.kv-services', '.kv-classes__item', 'kv-classes__item_bp', 991);
        resizeElement('.kv-services', '.kv-classes', 'kv-classes_bp', 991);
        resizeElement('.kv-services', '.kv-class', 'kv-class_bp', 991);
        resizeElement('.kv-services', '.kv-services', 'kv-services_bp', 991);
        resizeElement('.kv-services', '.kv-services__item', 'kv-services__item_bp', 991);
        resizeElement('.kv-class-tabs', '.kv-tabs-tail', 'kv-tabs-tail_bp', 991);
        resizeElement('.kv-class-tabs', '.kv-class-tabs', 'kv-class-tabs_bp', 991);
        resizeElement('.kv-services__footer', '.kv-services__prices', 'kv-services__prices_bp', 991);


    }, false)
);





