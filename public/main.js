 function minify() {
        const input = document.getElementById('input').value.trim();
        const output = document.getElementById('output');
        
        if (input === '') {
            alert('Please enter HTML code to minify.');
            return;
        }
        
        // Minify HTML code
        const minifiedHTML = input
            .replace(/<!--[\s\S]*?-->/g, '') // Remove HTML comments
            .replace(/\s{2,}/g, ' ') // Replace multiple spaces with single space
            .replace(/\n/g, '') // Remove newline characters
            .replace(/>\s+</g, '><'); // Remove spaces between tags
        
        output.value = minifiedHTML;
    }
    
    function copyCode() {
        const output = document.getElementById('output');
        
        if (output.value.trim() === '') {
            alert('There is no code to copy.');
            return;
        }
        
        output.select();
        document.execCommand('copy');
        alert('Code copied to clipboard!');
    }
