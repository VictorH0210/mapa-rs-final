const map = L.map('map').setView([-28.5, -53.5], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Exemplo com poucas cidades para representar
const cidades = [
  { nome: "Santa Rosa", pop: "73.575", idh: "0.776", pib: "48.000", coord: [-27.8706, -54.4796] },
  { nome: "Ijuí", pop: "83.764", idh: "0.776", pib: "52.000", coord: [-28.3881, -53.9202] },
  { nome: "Cruz Alta", pop: "59.003", idh: "0.765", pib: "42.000", coord: [-28.645, -53.6056] },
  { nome: "Panambi", pop: "45.000", idh: "0.758", pib: "40.000", coord: [-28.3022, -53.3528] },
  { nome: "Três Passos", pop: "22.000", idh: "0.745", pib: "35.000", coord: [-27.4894, -53.9797] },
  { nome: "Sarandi", pop: "25.000", idh: "0.752", pib: "38.000", coord: [-27.8875, -53.5322] },
  { nome: "Itaqui", pop: "25.000", idh: "0.742", pib: "37.000", coord: [-29.1397, -56.5353] },
  { nome: "Santo Augusto", pop: "20.000", idh: "0.735", pib: "36.000", coord: [-27.8586, -53.5142] },
  { nome: "Ajuricaba", pop: "10.000", idh: "0.725", pib: "30.000", coord: [-28.4261, -53.9722] },
  { nome: "Boa Vista do Buricá", pop: "9.000", idh: "0.715", pib: "28.000", coord: [-27.6128, -54.2678] },
  { nome: "Campo Novo", pop: "8.000", idh: "0.710", pib: "27.000", coord: [-27.5828, -53.8636] },
  { nome: "Tuparendi", pop: "7.000", idh: "0.705", pib: "26.000", coord: [-27.5936, -54.1061] },
  { nome: "Derrubadas", pop: "6.000", idh: "0.700", pib: "25.000", coord: [-27.4792, -53.8708] },
  { nome: "Redentora", pop: "5.000", idh: "0.695", pib: "24.000", coord: [-27.5069, -53.8778] },
  { nome: "São Martinho", pop: "4.000", idh: "0.690", pib: "23.000", coord: [-27.6111, -53.9056] },
  { nome: "Boa Vista do Cadeado", pop: "3.500", idh: "0.685", pib: "22.000", coord: [-27.5328, -53.9222] },
  { nome: "São José do Inhacorá", pop: "3.000", idh: "0.680", pib: "21.000", coord: [-27.4458, -53.8958] },
  { nome: "Nova Ramada", pop: "2.500", idh: "0.675", pib: "20.000", coord: [-27.3917, -53.8778] },
  { nome: "São Valério do Sul", pop: "2.000", idh: "0.670", pib: "19.000", coord: [-27.3667, -53.8889] },
  { nome: "Santo Antônio das Missões", pop: "1.500", idh: "0.665", pib: "18.000", coord: [-27.3000, -53.9000] },
  { nome: "São Luiz Gonzaga", pop: "1.000", idh: "0.660", pib: "17.000", coord: [-28.4097, -54.9606] },
  { nome: "Sete de Setembro", pop: "900", idh: "0.655", pib: "16.000", coord: [-27.4000, -53.9000] },
  { nome: "São Pedro do Butiá", pop: "800", idh: "0.650", pib: "15.000", coord: [-27.4500, -53.9500] },
  { nome: "São Francisco de Assis", pop: "700", idh: "0.645", pib: "14.000", coord: [-28.4000, -54.9000] },
  { nome: "São Vicente do Sul", pop: "600", idh: "0.640", pib: "13.000", coord: [-27.5000, -53.9500] },
  { nome: "São Gabriel", pop: "500", idh: "0.635", pib: "12.000", coord: [-28.4000, -54.8000] },
  { nome: "São José do Sul", pop: "400", idh: "0.630", pib: "11.000", coord: [-27.4000, -53.8000] },
  { nome: "São Pedro do Sul", pop: "300", idh: "0.625", pib: "10.000", coord: [-27.3000, -53.7000] },
  { nome: "São João do Sul", pop: "200", idh: "0.620", pib: "9.000", coord: [-27.2000, -53.6000] },
  { nome: "São Miguel do Sul", pop: "100", idh: "0.615", pib: "8.000", coord: [-27.1000, -53.5000] },
  { nome: "São José do Norte", pop: "50", idh: "0.610", pib: "7.000", coord: [-27.0000, -53.4000] }
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
