import './style.css'

document.querySelector('#app').innerHTML = `
  <div>
    <div id="svg-container">
      <svg width="100%" height="100%" viewBox="0 0 908 692" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g transform="matrix(1,0,0,1,-4349.21,-817.285)">
          <!-- Contenedor principal -->
          <g>
            <!-- Grupo de nodos/neuronas -->
            <g id="nodos">
              <g id="neurona-cero">
                <circle cx="4417.06" cy="1153" r="66.06" class="circle-style"/>
                <text x="4405.383" y="1157.5" class="text-style">0...</text>
              </g>

              <g id="neurona-uno">
                <circle cx="4785" cy="1153" r="71" class="circle-style"/>
                <text x="4773.383" y="1157.5" class="text-style">1...</text>
              </g>

              <g id="neurona-dos">
                <circle cx="4932.5" cy="1457.5" r="42.5" class="circle-style"/>
                <text x="4921.383" y="1461.5" class="text-style">2...</text>
              </g>

              <g id="neurona-tres">
                <circle cx="4950" cy="884" r="49" class="circle-style"/>
                <text x="4938.383" y="888.5" class="text-style">3...</text>
              </g>

              <g id="neurona-cuatro">
                <circle cx="5145.5" cy="1266.5" r="44.5" class="circle-style"/>
                <text x="5134.383" y="1270.5" class="text-style">4...</text>
              </g>
            </g>

            <!-- Grupo de conexiones -->
            <g id="conexiones">
              <g id="conexion-0-1">
                <path d="M4483.12,1153L4690.82,1153" class="path-style"/>
                <path d="M4702.82,1153L4686.82,1161L4690.82,1153L4686.82,1145L4702.82,1153Z" class="path-style"/>
              </g>

              <g id="conexion-0-2">
                <path d="M4473.07,1188.03L4878.6,1441.08" class="path-style"/>
                <path d="M4885.6,1445.45L4873.35,1444.29L4878.6,1441.08L4879.18,1434.96L4885.6,1445.45Z" class="path-style"/>
              </g>

              <g id="conexion-3-4">
                <path d="M4974.56,926.4L5133.9,1201.93" class="path-style"/>
                <path d="M5139.9,1212.32L5124.97,1202.48L5133.9,1201.93L5138.82,1194.47L5139.9,1212.32Z" class="path-style"/>
              </g>

              <g id="conexion-1-2">
                <path d="M4785,1224L4895.53,1415.46" class="path-style"/>
                <path d="M4899.65,1422.61L4889.39,1415.83L4895.53,1415.46L4898.92,1410.33L4899.65,1422.61Z" class="path-style"/>
              </g>

              <g id="conexion-1-3">
                <path d="M4794.37,1080.72L4907.07,929.74" class="path-style"/>
                <path d="M4912.01,923.13L4909.84,935.23L4907.07,929.74L4901.02,928.65L4912.01,923.13Z" class="path-style"/>
              </g>

              <g id="conexion-2-3">
                <path d="M4932.5,1415L4944.21,943.6" class="path-style"/>
                <path d="M4944.4,936.1L4949.15,946.22L4944.21,943.6L4939.15,945.97L4944.4,936.1Z" class="path-style"/>
              </g>

              <g id="conexion-4-2">
                <path d="M5114.03,1297.97L4984.09,1447.07" class="path-style"/>
                <path d="M4978.67,1453.29L4981.75,1441.38L4984.09,1447.07L4990.05,1448.61L4978.67,1453.29Z" class="path-style"/>
              </g>

              <g id="conexion-4-0">
                <path d="M5101,1266.5L4438.32,1220.53" class="path-style"/>
                <path d="M4427.1,1219.76L4442.58,1213.31L4438.32,1220.53L4441.54,1228.28L4427.1,1219.76Z" class="path-style"/>
              </g>
            </g>

            <!-- Grupo de textos -->
            <g id="textos">
              <!-- Textos de procesos -->
              <g id="textos-procesos">
                <text id="texto-ingesta" x="4703.619" y="1076.5" class="text-style">Ingesta de datos</text>
                <text id="texto-tokenizacion" x="4807.266" y="1305.5" class="text-style">Tokenización</text>
                <text id="texto-embeddings" x="4912.043" y="1514.5" class="text-style">Embeddings</text>
                <text id="texto-temperatura" x="5000.348" y="842.5" class="text-style">Ajuste de Temperatura</text>
                <text id="texto-backprop" x="5060.231" y="1329.5" class="text-style">Backpropagation</text>
                <text id="texto-persistencia" x="4397.436" y="1106.5" class="text-style">Persistencia</text>
                <text id="texto-decision" x="5073.123" y="1040.5" class="text-style">Decisión de la Red</text>
                <text id="texto-generacion" x="5196.873" y="1271.5" class="text-style">Generación de l...</text>
              </g>

              <!-- Textos de conexiones -->
              <g id="textos-conexiones">
                <text id="texto-contexto" x="4532.031" y="1157.5" class="text-style">Contexto inicial</text>
                <text id="texto-referencia" x="4825.318" y="1350.5" class="text-style">Referencia...</text>
                <text id="texto-base" x="4700.642" y="1359.5" class="text-style">aporta marco base</text>
                <text id="texto-importancia" x="4745" y="1195.5" class="text-style">Define importancia del input...</text>
                <text id="texto-ingreso" x="4745" y="1125.5" class="text-style">INFO ingresa al sistema</text>
                <text id="texto-error" x="5011.496" y="1364.5" class="text-style">aprende del error,...</text>
                <text id="texto-influencia" x="4536.116" y="1271.5" class="text-style">Inﬂuye, actualiza estado</text>
                <text id="texto-retroalimentacion" x="4993.374" y="1245.5" class="text-style">Retroalimentación...</text>
              </g>

              <!-- Textos con transformación -->
              <g id="textos-transformados">
                <text transform="matrix(0.642788,-0.766044,0.766044,0.642788,4847.97,1016.31)" class="text-style">Peso modula señal</text>
                <text transform="matrix(-3.82857e-16,-1,1,-3.82857e-16,4944.28,1091.37)" class="text-style">corrección aplicada</text>
                <text transform="matrix(0.5,0.866025,-0.866025,0.5,5046.01,1062.83)" class="text-style">Señal ﬁltrada</text>
                <text transform="matrix(0.707107,-0.707107,0.707107,0.707107,4832.27,982.768)" class="text-style">Multiplicación por pesos</text>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <p class="read-the-docs">
      sergiofores.es
    </p>
  </div>
`