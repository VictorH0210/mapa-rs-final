const map = L.map('map').setView([-28.5, -53.5], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Exemplo com poucas cidades para representar
const cidades = [
  { nome: "Santa Rosa", pop: "76.963", idh: "0.769", pib: "50.513,48", coord: [-27.8706, -54.4796] },
  { nome: "Cândido Godói", pop: "6.127", idh: "0.742", pib: "38.000,00", coord: [-27.9519, -54.7519] },
  { nome: "Santo Cristo", pop: "15.320", idh: "0.738", pib: "55.305,62", coord: [-27.8264, -54.6621] },
  { nome: "Porto Lucena", pop: "4.360", idh: "0.693", pib: "30.053,37", coord: [-27.8561, -55.0097] },
  { nome: "Porto Vera Cruz", pop: "1.800", idh: "0.700", pib: "28.000,00", coord: [-27.7383, -54.8997] },
  { nome: "Alecrim", pop: "6.500", idh: "0.710", pib: "35.000,00", coord: [-27.6578, -54.7644] },
  { nome: "Porto Mauá", pop: "2.500", idh: "0.705", pib: "32.000,00", coord: [-27.5794, -54.6658] },
  { nome: "Novo Machado", pop: "3.000", idh: "0.690", pib: "29.000,00", coord: [-27.5761, -54.5000] },
  { nome: "Tuparendi", pop: "8.000", idh: "0.720", pib: "36.000,00", coord: [-27.7525, -54.4819] },
  { nome: "Tucunduva", pop: "5.500", idh: "0.715", pib: "34.000,00", coord: [-27.6572, -54.4436] }
];

// Adiciona marcadores para cidades listadas
cidades.forEach(cidade => {
    const marker = L.circleMarker(cidade.coord, {
        radius: 8,
        fillColor: "#2b83ba",
        color: "#fff",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.9
    }).addTo(map);
    
    marker.bindTooltip(
        `<strong>${cidade.nome}</strong><br>População: ${cidade.pop}<br>IDH: ${cidade.idh}<br>PIB per capita: R$ ${cidade.pib}`,
        { permanent: false, direction: "top" }
    );
});
