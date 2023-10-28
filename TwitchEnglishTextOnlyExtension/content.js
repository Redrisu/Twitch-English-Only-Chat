function filterText(node) {
    if (node.nodeType === 3 ) { // Node.TEXT_NODE
        node.textContent = node.textContent.replace(/[^\x00-\x7F]/g, "");
    } else {
        for (let child of node.childNodes) {
            filterText(child);
        }
    }
}

function filterText1(node) {
    if ( node.nodeType !== Node.ELEMENT_NODE ) { // Node.TEXT_NODE
        node.textContent = node.textContent.replace(/[^\x00-\x7F]/g, "");
    } else {
        for (let child of node.childNodes) {
            filterText(child);
        }
    }
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        for (const addedNode of mutation.addedNodes) {
            filterText1(addedNode);
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

filterText(document.body);
