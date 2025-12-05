const fs = require('fs');
const minify = require('html-minifier-terser').minify;

(async () => {
    const htmlContent = fs.readFileSync('src/Gamified_Traffic_Simulator_Premium.html', 'utf8');
    
    const minifiedHtml = await minify(htmlContent, {
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
    });

    if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
    }

    fs.writeFileSync('dist/index.html', minifiedHtml);
    console.log('✓ HTML and JS minified successfully (no obfuscation)!');
})();
