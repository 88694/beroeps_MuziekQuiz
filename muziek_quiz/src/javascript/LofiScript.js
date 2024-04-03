 // Wait for the iframe to load
 window.onload = function() {
    // Get the iframe element
    var iframe = document.getElementById('embeddedFrame');

    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Find and display only the specific portion of the website you want
    var specificContent = iframeDocument.getElementById('specificDiv'); // Replace 'specificDiv' with the ID of the div you want to display

    // Hide all other elements except the specific content
    var allElements = iframeDocument.getElementsByTagName('*');
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i] !== specificContent) {
            allElements[i].style.display = 'none';
        }
    }
};