// 1. ECUACIÓN CUADRÁTICA
document.getElementById('formQuad').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene que la página se actualice
    
    let a = parseFloat(document.getElementById('q_a').value);
    let b = parseFloat(document.getElementById('q_b').value);
    let c = parseFloat(document.getElementById('q_c').value);
    let div = document.getElementById('resQuad');
    
    div.className = 'resultado activo';

    if (a === 0) {
        div.innerHTML = 'El coeficiente "a" no puede ser 0.';
        return;
    }

    let D = (b * b) - (4 * a * c);

    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        div.innerHTML = `<strong>La ecuación tiene dos raíces:</strong><br>x1 = ${x1.toFixed(4)}<br>x2 = ${x2.toFixed(4)}`;
    } else if (D === 0) {
        let x = -b / (2 * a);
        div.innerHTML = `<strong>La ecuación tiene una raíz:</strong><br>x = ${x.toFixed(4)}`;
    } else {
        div.innerHTML = `<strong>La ecuación no tiene raíces reales</strong>`;
    }
});

// 2. ESTIMACIÓN DE PI
document.getElementById('formPi').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene que la página se actualice

    let n = parseInt(document.getElementById('pi_n').value);
    let div = document.getElementById('resPi');
    div.className = 'resultado activo';

    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += 1 / (i * i);
    }

    let piAprox = Math.sqrt(6 * suma);
    let diff = Math.abs(piAprox - Math.PI);

    div.innerHTML = `
        <strong>Resultados con n = ${n}:</strong><br>
        • Pi aproximado: <strong>${piAprox.toFixed(8)}</strong><br>
        • Valor real de Pi: ${Math.PI.toFixed(8)}<br>
        • Diferencia: ${diff.toExponential(4)}
    `;
});

// 3. REPARTO DE CAMELLOS
document.getElementById('formCamellos').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene que la página se actualice

    let total = parseFloat(document.getElementById('c_total').value);
    let div = document.getElementById('resCamellos');
    div.className = 'resultado activo';

    let temporal = total + 1;
    let mayor = temporal * (1/2);
    let mediano = temporal * (1/3);
    let menor = temporal * (1/9);
    let sobrante = temporal - (mayor + mediano + menor);

    div.innerHTML = `
        <strong>Resultado (con ${temporal} camellos):</strong><br>
        • Hermano mayor (1/2): <strong>${mayor} camellos</strong><br>
        • Hermano mediano (1/3): <strong>${mediano} camellos</strong><br>
        • Hermano menor (1/9): <strong>${menor} camellos</strong><br>
        • Sobrantes para Beremiz: <strong>${sobrante} camellos</strong>
    `;
});

// 4. PAGO DE LOS PANES
document.getElementById('formPanes').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene que la página se actualice

    let p1 = parseFloat(document.getElementById('p_1').value);
    let p2 = parseFloat(document.getElementById('p_2').value);
    let mon = parseFloat(document.getElementById('p_mon').value);
    let div = document.getElementById('resPanes');
    div.className = 'resultado activo';

    let totalPanes = p1 + p2;
    let consumo = totalPanes / 3;
    let aporte1 = p1 - consumo;
    let aporte2 = p2 - consumo;
    let totalAporte = aporte1 + aporte2;

    if (totalAporte <= 0) {
        div.innerHTML = 'Los viajeros no aportaron más comida de la que comieron.';
        return;
    }

    let pago1 = (aporte1 / totalAporte) * mon;
    let pago2 = (aporte2 / totalAporte) * mon;

    div.innerHTML = `
        <strong>Resultado del Reparto:</strong><br>
        • Total de panes: ${totalPanes} (a ${consumo.toFixed(2)} por persona)<br>
        • Primer viajero recibe: <strong>${pago1.toFixed(2)} monedas</strong><br>
        • Segundo viajero recibe: <strong>${pago2.toFixed(2)} monedas</strong>
    `;
});