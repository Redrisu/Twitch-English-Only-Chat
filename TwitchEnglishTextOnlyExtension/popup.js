let isScriptActive = false;

document.getElementById('toggleButton').addEventListener('click', function() {
    isScriptActive = !isScriptActive;
    
    if (isScriptActive) {
        this.textContent = 'Pause Script';
    } else {
        this.textContent = 'Run Script';
    }
});
