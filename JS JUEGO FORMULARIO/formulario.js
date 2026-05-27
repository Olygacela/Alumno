// --- CONFIGURACIÓN GLOBAL ---
const coloresOriginales = [
    '#ff3b30', '#ff9500', '#ffcc00', 
    '#4cd964', '#007aff', '#af52de', 
    '#5ac8fa', '#ff2d55', '#8e8e93'

];

main.css: body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f7;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 400px;
    
}

h1 { text-align: center; margin-bottom: 5px; color: #1d1d1f; }
p { text-align: center; color: #86868b; font-size: 14px; }

.input-group { margin-top: 15px; }
label { display: block; font-weight: bold; margin-bottom: 5px; font-size: 14px; }
input[type="text"], input[type="password"], input[type="date"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #d2d2d7;
    border-radius: 8px;
    box-sizing: border-box;
    display
}

.btn-primary {
    width: 100%;
    padding: 14px;
    background-color: #0066cc;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
}


.hidden { display: none; }

{  
    window.onload = function () {
    //en este momento ya se ha cargado todo el html
    //las imágenes, el css, todo
    console.log('Se ha cargado la página');
}