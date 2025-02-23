(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerPolicy&&(c.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?c.credentials="include":t.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(t){if(t.ep)return;t.ep=!0;const c=r(t);fetch(t.href,c)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();document.querySelector("#app").innerHTML=`
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
`;function f(i){let e=null,r={x:0,y:0};function s(o){const n=i.getScreenCTM();return{x:(o.clientX-n.e)/n.a,y:(o.clientY-n.f)/n.d}}function t(o){if(o.target.classList.contains("text-style")||o.target.classList.contains("circle-style")||o.target.closest(".connection-group"))if(o.target.closest(".connection-group")){e=o.target.closest(".connection-group");const n=s(o),l=e.querySelector("path").getAttribute("d").split(" ")[0].replace("M","").split(",");r={x:n.x-parseFloat(l[0]),y:n.y-parseFloat(l[1])}}else{e=o.target;const n=s(o);e.classList.contains("circle-style")?r={x:n.x-parseFloat(e.getAttribute("cx")),y:n.y-parseFloat(e.getAttribute("cy"))}:r={x:n.x-parseFloat(e.getAttribute("x")),y:n.y-parseFloat(e.getAttribute("y"))}}}function c(o){if(e){o.preventDefault();const n=s(o);e.classList.contains("circle-style")?(e.setAttribute("cx",n.x-r.x),e.setAttribute("cy",n.y-r.y)):e.classList.contains("connection-group")?e.querySelectorAll("path").forEach(l=>{const x=l.getAttribute("d").split(/[ML]/).filter(d=>d.length).map(d=>{const[u,y]=d.split(",").map(parseFloat),p=n.x-r.x,g=n.y-r.y;return`${u+p-u},${y+g-y}`});l.setAttribute("d","M"+x[0]+(x.length>1?"L"+x.slice(1).join("L"):""))}):(e.setAttribute("x",n.x-r.x),e.setAttribute("y",n.y-r.y))}}function a(o){e=null}i.addEventListener("mousedown",t),i.addEventListener("mousemove",c),i.addEventListener("mouseup",a),i.addEventListener("mouseleave",a)}document.addEventListener("DOMContentLoaded",()=>{const i=document.querySelector("svg");f(i)});
