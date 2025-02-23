import { Neuron } from './Neuron.js';
import { Connection } from './Connection.js';

export class NeuralDiagram {
    constructor(containerId) {
        this.containerId = containerId;
        this.neurons = [];
        this.connections = [];
        
        // Sistema de coordenadas relativas
        this.config = {
            // Dimensiones del viewport SVG
            viewBox: {
                width: 1000,    // Ancho del viewport
                height: 800,    // Alto del viewport
                padding: 50     // Padding interno
            },
            // Espaciado entre neuronas
            neuronSpacing: {
                x: 200,        // Espacio horizontal entre neuronas
                y: 200         // Espacio vertical entre neuronas
            },
            defaultRadius: 40   // Radio por defecto de las neuronas
        };
    }

    // Convierte coordenadas de grid a coordenadas SVG relativas
    gridToSVG(col, row) {
        const { padding } = this.config.viewBox;
        const { x: spacingX, y: spacingY } = this.config.neuronSpacing;

        return {
            x: padding + (col * spacingX),
            y: padding + (row * spacingY)
        };
    }

    // Añade una neurona usando coordenadas de grid
    addNeuronToGrid(id, col, row, title, subtitle = '', radius = this.config.defaultRadius) {
        const pos = this.gridToSVG(col, row);
        const neuron = new Neuron(id, pos.x, pos.y, radius, title, subtitle);
        this.neurons.push(neuron);
        return neuron;
    }

    // Conecta dos neuronas por sus IDs
    connectNeurons(id, fromNeuron, toNeuron, label = '', transform = '') {
        if (!fromNeuron || !toNeuron) {
            console.error('Neuronas no encontradas');
            return null;
        }

        const connection = new Connection(
            id,
            fromNeuron,
            toNeuron,
            label,
            transform
        );
        
        this.connections.push(connection);
        return connection;
    }

    render() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        const { width, height } = this.config.viewBox;
        const connectionsHTML = this.connections.map(connection => connection.render()).join('');
        const neuronsHTML = this.neurons.map(neuron => neuron.render()).join('');

        container.innerHTML = `
            <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 ${width} ${height}" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="conexiones">
                    ${connectionsHTML}
                </g>
                <g id="nodos">
                    ${neuronsHTML}
                </g>
            </svg>
        `;
    }
}
