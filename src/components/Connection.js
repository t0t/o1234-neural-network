export class Connection {
    constructor(id, fromNeuron, toNeuron, label = '', transform = '') {
        this.id = id;
        this.fromNeuron = fromNeuron;
        this.toNeuron = toNeuron;
        this.label = label;
        this.transform = transform;
    }

    get startX() { return this.fromNeuron.x; }
    get startY() { return this.fromNeuron.y; }
    get endX() { return this.toNeuron.x; }
    get endY() { return this.toNeuron.y; }

    calculateArrowPath() {
        const dx = this.endX - this.startX;
        const dy = this.endY - this.startY;
        const angle = Math.atan2(dy, dx);
        
        const arrowLength = 16;
        const arrowWidth = 8;
        
        const x2 = this.endX - arrowLength * Math.cos(angle);
        const y2 = this.endY - arrowLength * Math.sin(angle);
        
        const x3 = x2 - arrowWidth * Math.sin(angle);
        const y3 = y2 + arrowWidth * Math.cos(angle);
        
        const x4 = x2 + arrowWidth * Math.sin(angle);
        const y4 = y2 - arrowWidth * Math.cos(angle);
        
        return `M${this.endX},${this.endY}L${x3},${y3}L${x4},${y4}Z`;
    }

    calculateTextPosition() {
        const dx = this.endX - this.startX;
        const dy = this.endY - this.startY;
        const angle = Math.atan2(dy, dx);
        
        // Punto medio de la línea
        const midX = (this.startX + this.endX) / 2;
        const midY = (this.startY + this.endY) / 2;
        
        // Reducir el offset perpendicular para el texto
        const offset = 15; 
        const textX = midX - offset * Math.sin(angle);
        const textY = midY + offset * Math.cos(angle);
        
        // Calcular la rotación del texto
        let rotation = (angle * 180) / Math.PI;
        
        // Ajustar la rotación para mantener el texto legible
        if (rotation > 90 || rotation < -90) {
            rotation += 180;
        }
        
        // Limitar la rotación máxima
        rotation = Math.max(-45, Math.min(45, rotation));
        
        return {
            x: textX,
            y: textY,
            rotation: rotation
        };
    }

    render() {
        const arrowPath = this.calculateArrowPath();
        let textElement = '';
        
        if (this.label) {
            if (this.transform) {
                textElement = `
                    <text transform="${this.transform}" class="text-style">
                        ${this.label}
                    </text>`;
            } else {
                const textPos = this.calculateTextPosition();
                textElement = `
                    <text 
                        x="${textPos.x}" 
                        y="${textPos.y}" 
                        transform="rotate(${textPos.rotation} ${textPos.x} ${textPos.y})"
                        class="text-style"
                    >${this.label}</text>`;
            }
        }

        return `
            <g class="connection" id="connection-${this.id}">
                <path
                    d="M${this.startX},${this.startY} L${this.endX},${this.endY}"
                    class="connection-line"
                />
                <path
                    d="${arrowPath}"
                    class="connection-arrow"
                />
                ${textElement}
            </g>
        `;
    }
}
