(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function c(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=c(e);fetch(e.href,n)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();document.querySelector("#app").innerHTML=`
  <div class="container">
    <div id="svg-container">
      <svg width="100%" height="100%" viewBox="0 0 1000 800" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <!-- Grupo de nodos/neuronas -->
        <g id="nodos">
          <g id="neurona-cero">
            <circle cx="200" cy="400" r="40" class="circle-style"/>
            <text x="170" y="390" class="text-style">0 Entorno,</text>
            <text x="170" y="410" class="text-style">Memoria Base</text>
          </g>

          <g id="neurona-uno">
            <circle cx="400" cy="400" r="40" class="circle-style"/>
            <text x="380" y="405" class="text-style">1 Input</text>
          </g>

          <g id="neurona-dos">
            <circle cx="400" cy="600" r="40" class="circle-style"/>
            <text x="380" y="605" class="text-style">2 Sesgo</text>
          </g>

          <g id="neurona-tres">
            <circle cx="600" cy="200" r="40" class="circle-style"/>
            <text x="580" y="205" class="text-style">3 Activación</text>
          </g>

          <g id="neurona-cuatro">
            <circle cx="800" cy="400" r="40" class="circle-style"/>
            <text x="799" y="403" class="text-style">4 Output</text>
          </g>
        </g>

        <!-- Grupo de conexiones -->
        <g id="conexiones">
          <g id="conexion-0-1" class="connection-group">
            <path d="M240,400L360,400" class="connection-line"/>
            <path d="M370,400L355,408L360,400L355,392L370,400Z" class="connection-arrow"/>
          </g>

          <g id="conexion-0-2" class="connection-group">
            <path d="M230,430L370,580" class="connection-line"/>
            <path d="M380,590L365,580L370,575L372,565L380,590Z" class="connection-arrow"/>
          </g>

          <g id="conexion-3-4" class="connection-group">
            <path d="M630,230L780,370" class="connection-line"/>
            <path d="M790,380L770,365L780,370L785,360L790,380Z" class="connection-arrow"/>
          </g>

          <g id="conexion-1-2" class="connection-group">
            <path d="M400,440L400,560" class="connection-line"/>
            <path d="M400,570L392,555L400,560L408,555L400,570Z" class="connection-arrow"/>
          </g>

          <g id="conexion-1-3" class="connection-group">
            <path d="M430,370L570,230" class="connection-line"/>
            <path d="M580,220L570,240L565,230L555,225L580,220Z" class="connection-arrow"/>
          </g>

          <g id="conexion-2-3" class="connection-group">
            <path d="M430,580L580,230" class="connection-line"/>
            <path d="M590,220L585,240L580,230L570,235L590,220Z" class="connection-arrow"/>
          </g>

          <g id="conexion-4-2" class="connection-group">
            <path d="M770,430L440,580" class="connection-line"/>
            <path d="M430,590L435,570L440,580L450,585L430,590Z" class="connection-arrow"/>
          </g>

          <g id="conexion-4-0" class="connection-group">
            <path d="M760,400L240,400" class="connection-line"/>
            <path d="M230,400L245,392L240,400L245,408L230,400Z" class="connection-arrow"/>
          </g>
        </g>

        <!-- Grupo de textos -->
        <g id="textos">
          <!-- Textos de procesos -->
          <g id="textos-procesos">
            <text x="300" y="350" class="text-style">Ingesta de datos</text>
            <text x="450" y="500" class="text-style">Tokenización</text>
            <text x="400" y="650" class="text-style">Embeddings</text>
            <text x="600" y="150" class="text-style">Ajuste de Temperatura</text>
            <text x="650" y="500" class="text-style">Backpropagation</text>
            <text x="150" y="350" class="text-style">Persistencia</text>
            <text x="768" y="272" class="text-style">Decisión de la Red</text>
            <text x="825" y="458" class="text-style">Generación de la respuesta</text>
          </g>

          <!-- Textos de conexiones -->
          <g id="textos-conexiones">
            <text x="299" y="400" class="text-style">Contexto inicial</text>
            <text x="450" y="550" class="text-style">Referencia...</text>
            <text x="300" y="550" class="text-style">aporta marco base</text>
            <text x="350" y="450" class="text-style">Define importancia del input...</text>
            <text x="350" y="350" class="text-style">INFO ingresa al sistema</text>
            <text x="600" y="550" class="text-style">aprende del error,...</text>
            <text x="250" y="480" class="text-style">Influye, actualiza estado</text>
            <text x="600" y="450" class="text-style">Retroalimentación...</text>
          </g>

          <!-- Textos con transformación -->
          <g id="textos-transformados">
            <text transform="rotate(-40,498,327)" x="498" y="327" class="text-style">Peso modula señal</text>
            <text transform="rotate(-90,400,500)" x="400" y="500" class="text-style">corrección aplicada</text>
            <text transform="rotate(30,700,300)" x="700" y="300" class="text-style">Señal filtrada</text>
            <text transform="rotate(-45,500,280)" x="500" y="280" class="text-style">Multiplicación por pesos</text>
          </g>
        </g>
      </svg>
    </div>

    <p class="read-the-docs">
      sergiofores.es
    </p>
  </div>
`;function f(r){let s=null,c={x:0,y:0};function t(i){const o=r.getScreenCTM();return{x:(i.clientX-o.e)/o.a,y:(i.clientY-o.f)/o.d}}function e(i){if(i.target.classList.contains("text-style")||i.target.classList.contains("circle-style")||i.target.closest(".connection-group"))if(i.target.closest(".connection-group")){s=i.target.closest(".connection-group");const o=t(i),a=s.querySelector("path").getAttribute("d").split(" ")[0].replace("M","").split(",");c={x:o.x-parseFloat(a[0]),y:o.y-parseFloat(a[1])}}else{s=i.target;const o=t(i);s.classList.contains("circle-style")?c={x:o.x-parseFloat(s.getAttribute("cx")),y:o.y-parseFloat(s.getAttribute("cy"))}:c={x:o.x-parseFloat(s.getAttribute("x")),y:o.y-parseFloat(s.getAttribute("y"))}}}function n(i){if(s){i.preventDefault();const o=t(i);s.classList.contains("circle-style")?(s.setAttribute("cx",o.x-c.x),s.setAttribute("cy",o.y-c.y)):s.classList.contains("connection-group")?s.querySelectorAll("path").forEach(a=>{const x=a.getAttribute("d").split(/[ML]/).filter(d=>d.length).map(d=>{const[u,y]=d.split(",").map(parseFloat),p=o.x-c.x,g=o.y-c.y;return`${u+p-u},${y+g-y}`});a.setAttribute("d","M"+x[0]+(x.length>1?"L"+x.slice(1).join("L"):""))}):(s.setAttribute("x",o.x-c.x),s.setAttribute("y",o.y-c.y))}}function l(i){s=null}r.addEventListener("mousedown",e),r.addEventListener("mousemove",n),r.addEventListener("mouseup",l),r.addEventListener("mouseleave",l)}document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelector("svg");f(r)});
