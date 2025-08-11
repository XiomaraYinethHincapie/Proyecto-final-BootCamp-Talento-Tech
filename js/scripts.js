document.addEventListener('DOMContentLoaded', function () {
    fetch('data/CO2_combustion_industrial.json')
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('graficoCombustionIndustrial').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(item => item.Año),
                    datasets: [{
                        label: 'Colombia',
                        data: data.map(item => item['Mt CO2']),
                        borderColor: 'rgba(17, 65, 67, 1)',
                        backgroundColor: 'rgba(5, 159, 154, 0.6)',
                        fill: true,
                        borderWidth: 2,
                        tension: 0.2,
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: true },
                        tooltip: { enabled: true }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Mt CO₂'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Año'
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error cargando datos:', error));
});
