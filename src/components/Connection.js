export class Connection {
    constructor(id, startX, startY, endX, endY, label = '', transform = '') {
        this.id = id;
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.label = label;
        this.transform = transform;
    }

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
        
        // Offset perpendicular para el texto
        const offset = 30;
        const textX = midX - offset * Math.sin(angle);
        const textY = midY + offset * Math.cos(angle);
        
        // Calcular la rotación del texto para que siga la dirección de la línea
        let rotation = (angle * 180) / Math.PI;
        
        // Ajustar la rotación para que el texto no esté al revés
        if (rotation > 90 || rotation < -90) {
            rotation += 180;
        }
        
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
                // Usar transformación personalizada si se proporciona
                textElement = `
                    <text transform="${this.transform}" class="text-style">
                        ${this.label}
                    </text>`;
            } else {
                // Usar posición calculada
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
            <g id="conexion-${this.id}">
                <path 
                    d="M${this.startX},${this.startY}L${this.endX},${this.endY}" 
                    class="path-style"
                />
                <path 
                    d="${arrowPath}" 
                    class="path-style"
                />
                ${textElement}
            </g>
        `;
    }
}
