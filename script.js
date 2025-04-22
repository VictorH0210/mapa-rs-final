const map = L.map('map').setView([-28.5, -53.5], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Exemplo com poucas cidades para representar
const cidades = [
  { nome: "Santa Rosa", pop: "73.575", idh: "0.776", pib: "48.000", coord: [-27.8706, -54.4796] },
  { nome: "Ijuí", pop: "83.764", idh: "0.776", pib: "52.000", coord: [-28.3881, -53.9202] },
  { nome: "Cruz Alta", pop: "59.003", idh: "0.765", pib: "42.000", coord: [-28.645, -53.6056] },
  { nome: "Santa Rosa", pop: "76.963", idh: "0.769", pib: "50.513,48", coord: [-27.8706, -54.4796] },
  { nome: "Cândido Godói", pop: "6.127", idh: "0.742", pib: "38.000,00", coord: [-27.9519, -54.7519] },
  { nome: "Santo Cristo", pop: "15.320", idh: "0.738", pib: "55.305,62", coord: [-27.8264, -54.6621] },
  { nome: "Porto Lucena", pop: "4.360", idh: "0.693", pib: "30.053,37", coord: [-27.8561, -55.0097] },
  { nome: "Porto Vera Cruz", pop: "1.800", idh: "0.700", pib: "28.000,00", coord: [-27.7383, -54.8997] },
  { nome: "Alecrim", pop: "6.500", idh: "0.710", pib: "35.000,00", coord: [-27.6578, -54.7644] },
  { nome: "Porto Mauá", pop: "2.500", idh: "0.705", pib: "32.000,00", coord: [-27.5794, -54.6658] },
  { nome: "Novo Machado", pop: "3.000", idh: "0.690", pib: "29.000,00", coord: [-27.5761, -54.5000] },
  { nome: "Tuparendi", pop: "8.000", idh: "0.720", pib: "36.000,00", coord: [-27.7525, -54.4819] },
  { nome: "Tucunduva", pop: "5.500", idh: "0.715", pib: "34.000,00", coord: [-27.6572, -54.4436] },
  { nome: "Horizontina", pop: "19.389", idh: "0.783", pib: "R$ 52.000,00", coord: [-27.6286, -54.3056] },
  { nome: "Três de Maio", pop: "24.916", idh: "0.759", pib: "R$ 56.767,21", coord: [-27.7806, -54.2358] },
  { nome: "Dr. Maurício Cardoso", pop: "5.000", idh: "0.706", pib: "R$ 45.824,83", coord: [-27.5094, -54.3647] },
  { nome: "Crissiumal", pop: "12.886", idh: "0.712", pib: "R$ 30.375,50", coord: [-27.4994, -54.0997] },
  { nome: "Tiradentes do Sul", pop: "4.000", idh: "0.689", pib: "R$ 25.481,13", coord: [-27.4025, -54.0819] },
  { nome: "Esperança do Sul", pop: "3.500", idh: "0.700", pib: "R$ 28.000,00", coord: [-27.3600, -54.0700] },
  { nome: "Três Passos", pop: "23.000", idh: "0.750", pib: "R$ 40.000,00", coord: [-27.4550, -53.9297] },
  { nome: "Bom Progresso", pop: "2.500", idh: "0.690", pib: "R$ 27.000,00", coord: [-27.5394, -53.8719] },
  { nome: "Humaitá", pop: "5.000", idh: "0.710", pib: "R$ 30.000,00", coord: [-27.5694, -53.9697] },
  { nome: "Campo Novo", pop: "4.500", idh: "0.705", pib: "R$ 29.000,00", coord: [-27.6683, -53.8056] },
  { nome: "Santa Rosa", pop: "76.963", idh: "0.769", pib: "R$ 50.513,48", coord: [-27.8706, -54.4796] },
  { nome: "Cândido Godói", pop: "6.127", idh: "0.728", pib: "R$ 38.000,00", coord: [-27.9519, -54.7519] },
  { nome: "Santo Cristo", pop: "15.320", idh: "0.738", pib: "R$ 55.305,62", coord: [-27.8264, -54.6621] },
  { nome: "Porto Lucena", pop: "4.360", idh: "0.693", pib: "R$ 30.053,37", coord: [-27.8561, -55.0097] },
  { nome: "Porto Vera Cruz", pop: "1.800", idh: "0.700", pib: "R$ 28.000,00", coord: [-27.7383, -54.8997] },
  { nome: "Alecrim", pop: "6.500", idh: "0.710", pib: "R$ 35.000,00", coord: [-27.6578, -54.7644] },
  { nome: "Porto Mauá", pop: "2.500", idh: "0.705", pib: "R$ 32.000,00", coord: [-27.5794, -54.6658] },
  { nome: "Novo Machado", pop: "3.000", idh: "0.690", pib: "R$ 29.000,00", coord: [-27.5761, -54.5000] },
  { nome: "Tuparendi", pop: "8.000", idh: "0.720", pib: "R$ 36.000,00", coord: [-27.7525, -54.4819] },
  { nome: "Tucunduva", pop: "5.500", idh: "0.715", pib: "R$ 34.000,00", coord: [-27.6572, -54.4436] },
  { nome: "Horizontina", pop: "19.389", idh: "0.783", pib: "R$ 52.000,00", coord: [-27.6286, -54.3056] },
  { nome: "Três de Maio", pop: "24.916", idh: "0.759", pib: "R$ 56.767,21", coord: [-27.7806, -54.2358] },
  { nome: "Dr. Maurício Cardoso", pop: "5.000", idh: "0.706", pib: "R$ 45.824,83", coord: [-27.5094, -54.3647] },
  { nome: "Crissiumal", pop: "12.886", idh: "0.712", pib: "R$ 30.375,50", coord: [-27.4994, -54.0997] },
  { nome: "Tiradentes do Sul", pop: "4.000", idh: "0.689", pib: "R$ 25.481,13", coord: [-27.4025, -54.0819] },
  { nome: "Esperança do Sul", pop: "3.500", idh: "0.700", pib: "R$ 28.000,00", coord: [-27.3600, -54.0700] },
  { nome: "Três Passos", pop: "23.000", idh: "0.750", pib: "R$ 40.000,00", coord: [-27.4550, -53.9297] },
  { nome: "Bom Progresso", pop: "2.500", idh: "0.690", pib: "R$ 27.000,00", coord: [-27.5394, -53.8719] },
  { nome: "Humaitá", pop: "5.000", idh: "0.710", pib: "R$ 30.000,00", coord: [-27.5694, -53.9697] },
  { nome: "Campo Novo", pop: "4.500", idh: "0.705", pib: "R$ 29.000,00", coord: [-27.6683, -53.8056] },
  { nome: "Sede Nova", pop: "3.000", idh: "0.700", pib: "R$ 28.000,00", coord: [-27.6361, -53.9497] },
  { nome: "Nova Candelária", pop: "2.500", idh: "0.710", pib: "R$ 30.000,00", coord: [-27.6133, -54.1075] },
  { nome: "São Martinho", pop: "5.000", idh: "0.720", pib: "R$ 32.000,00", coord: [-27.7111, -53.9697] },
  { nome: "Boa Vista do Buricá", pop: "6.000", idh: "0.730", pib: "R$ 34.000,00", coord: [-27.6694, -54.1083] },
  { nome: "São José do Inhacorá", pop: "2.000", idh: "0.715", pib: "R$ 29.000,00", coord: [-27.7250, -54.1278] },
  { nome: "Inhacorá", pop: "2.500", idh: "0.705", pib: "R$ 28.000,00", coord: [-27.8722, -54.0147] },
  { nome: "Alegria", pop: "3.000", idh: "0.710", pib: "R$ 30.000,00", coord: [-27.8344, -54.0550] },
  { nome: "Independência", pop: "4.000", idh: "0.720", pib: "R$ 32.000,00", coord: [-27.8500, -54.1883] },
  { nome: "Giruá", pop: "16.282", idh: "0.721", pib: "76.479,16", coord: [-28.0292, -54.3514] },
  { nome: "Catuípe", pop: "9.483", idh: "0.739", pib: "73.932,28", coord: [-28.255, -54.0139] },
  { nome: "Coronel Barros", pop: "2.822", idh: "0.744", pib: "89.696,56", coord: [-28.383, -54.066] },
  { nome: "Augusto Pestana", pop: "7.490", idh: "0.739", pib: "77.033,28", coord: [-28.5183, -53.9883] },
  { nome: "Jóia", pop: "7.184", idh: "0.686", pib: "50.311,63",  coord: [-28.6467, -54.1222] },
  { nome: "Boa Vista do Cadeado", pop: "2.466", idh: "0.700", pib: "190.085,27", coord: [-28.6069, -53.815] }
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
