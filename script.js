const map = L.map('map').setView([-28.5, -53.5], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Exemplo com poucas cidades para representar
const cidades = [
  { nome: "Santa Rosa", pop: "73.575", idh: "0.776", pib: "48.000", coord: [-27.8706, -54.4796] },
  { nome: "Ijuí", pop: "83.764", idh: "0.776", pib: "52.000", coord: [-28.3881, -53.9202] },
  { nome: "Cruz Alta", pop: "59.003", idh: "0.765", pib: "42.000", coord: [-28.645, -53.6056] },
  { nome: "Cândido Godói", pop: "6.127", idh: "0.742", pib: "38.000,00", coord: [-27.9519, -54.7519] },
  { nome: "Santo Cristo", pop: "15.320", idh: "0.738", pib: "55.305,62", distancia: "75", colportor: "Christiel", coord: [-27.8264, -54.6621] },
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
  { nome: "Augusto Pestana", pop: "7.490", idh: "0.739", pib: "77.033,28", distancia: "58", colportor: "Gabriel Melo", coord: [-28.5183, -53.9883] },
  { nome: "Jóia", pop: "7.184", idh: "0.686", pib: "50.311,63",  coord: [-28.6467, -54.1222] },
  { nome: "Boa Vista do Cadeado", pop: "2.466", idh: "0.700", pib: "190.085,27", coord: [-28.6069, -53.815] },
  { nome: "Pejuçara", pop: "3.800", idh: "0.750", pib: "28.000,00", coord: [-28.4244, -53.6575] },
  { nome: "Panambi", pop: "40.000", idh: "0.780", pib: "35.000,00", coord: [-28.2833, -53.5] },
  { nome: "Condor", pop: "6.700", idh: "0.740", pib: "30.000,00", coord: [-28.2072, -53.4889] },
  { nome: "Nova Ramada", pop: "2.800", idh: "0.720", pib: "25.000,00", coord: [-28.0667, -53.7] },
  { nome: "Ajuricaba", pop: "7.000", idh: "0.750", pib: "28.000,00", coord: [-28.2347, -53.775] },
  { nome: "Bozano", pop: "2.300", idh: "0.730", pib: "26.000,00", coord: [-28.365, -53.7725] },
  { nome: "Santa Bárbara do Sul", pop: "10.000", idh: "0.760", pib: "32.000,00", coord: [-28.3658, -53.25] },
  { nome: "Saldanha Marinho", pop: "2.500", idh: "0.720", pib: "24.000,00", coord: [-28.3944, -53.0972] },
  { nome: "Ibirubá", pop: "20.000", idh: "0.770", pib: "34.000,00", coord: [-28.63, -53.0969] },
  { nome: "Quinze de Novembro", pop: "3.000", idh: "0.740", pib: "27.000,00", coord: [-28.7461, -53.1014] },
  { nome: "Fortaleza dos Valos", pop: "4.000", idh: "0.730", pib: "26.000,00", coord: [-28.7942, -53.2242] },
  { nome: "Boa Vista do Incra", pop: "2.000", idh: "0.710", pib: "23.000,00", coord: [-28.8186, -53.3917] },
  { nome: "Santo Ângelo", pop: "77.000", idh: "0.780", pib: "36.000,00", coord: [-28.3, -54.2667] },
  { nome: "Entre-Ijuís", pop: "9.000", idh: "0.750", pib: "29.000,00", coord: [-28.3689, -54.2683] },
  { nome: "Eugênio de Castro", pop: "3.000", idh: "0.720", pib: "25.000,00", coord: [-28.5319, -54.15] },
  { nome: "São Miguel das Missões", pop: "7.000", idh: "0.740", pib: "28.000,00", coord: [-28.5569, -54.5556] },
  { nome: "Vitória das Missões", pop: "3.000", idh: "0.730", pib: "26.000,00", coord: [-28.3511, -54.5044] },
  { nome: "Senador Salgado Filho", pop: "2.500", idh: "0.720", pib: "24.000,00", coord: [-28.0272, -54.55] },
  { nome: "Sete de Setembro", pop: "2.000", idh: "0.710", pib: "23.000,00", coord: [-28.1361, -54.4639] },
  { nome: "Guarani das Missões", pop: "7.000", idh: "0.750", pib: "28.000,00", coord: [-28.1458, -54.5625] },
  { nome: "Ubiretama", pop: "2.000", idh: "0.710", pib: "23.000,00", coord: [-28.0408, -54.6861] },
  { nome: "Cerro Largo", pop: "15.000", idh: "0.770", pib: "33.000,00", coord: [-28.1486, -54.7417] },
  { nome: "Mato Queimado", pop: "1.500", idh: "0.700", pib: "22.000,00", coord: [-28.2528, -54.6158] },
  { nome: "Caibaté", pop: "5.000", idh: "0.740", pib: "27.000,00", coord: [-28.29, -54.645] },
  { nome: "Capão do Cipó", pop: "4.000", idh: "0.720", pib: "25.000,00", coord: [-28.9311, -54.555] },
  { nome: "Rolador", pop: "2.500", idh: "0.700", pib: "25.000,00", coord: [-28.2561, -54.8183] },
  { nome: "Salvador das Missões", pop: "2.700", idh: "0.710", pib: "26.000,00", coord: [-28.1233, -54.8372] },
  { nome: "Campina das Missões", pop: "5.882", idh: "0.738", pib: "44.914,25", coord: [-27.9897, -54.8411] },
  { nome: "São Pedro do Butiá", pop: "2.000", idh: "0.720", pib: "24.000,00", coord: [-28.1242, -54.8925] },
  { nome: "São Paulo das Missões", pop: "5.846", idh: "0.692", pib: "35.470,00", coord: [-28.0197, -54.94] },
  { nome: "Roque Gonzales", pop: "6.576", idh: "0.688", pib: "64.744,41", coord: [-28.1297, -55.0264] },
  { nome: "Porto Xavier", pop: "9.938", idh: "0.723", pib: "20.793,08", coord: [-27.9083, -55.145] },
  { nome: "Pirapó", pop: "2.000", idh: "0.710", pib: "23.000,00", coord: [-28.0433, -55.2] },
  { nome: "Dezesseis de Novembro", pop: "2.300", idh: "0.700", pib: "22.000,00", coord: [-28.2194, -55.0611] },
  { nome: "Santo Antônio das Missões", pop: "10.300", idh: "0.686", pib: "67.869,46", coord: [-28.5139, -55.225] },
  { nome: "Garruchos", pop: "2.800", idh: "0.672", pib: "23.578,09", coord: [-28.1947, -55.6383] },
  { nome: "São Nicolau", pop: "5.700", idh: "0.717", pib: "28.304,51", coord: [-28.1836, -55.2661] },
  { nome: "São Borja", pop: "83.488", idh: "0.740", pib: "36.876,62", coord: [-28.6597, -56.0039] },
  { nome: "Itacurubi", pop: "3.300", idh: "0.681", pib: "26.345,12", coord: [-28.7917, -55.2319] },
  { nome: "Maçambara", pop: "4.700", idh: "0.693", pib: "30.684,88", coord: [-29.1444, -56.0672] },
  { nome: "Itaqui", pop: "37.523", idh: "0.723", pib: "36.128,20", coord: [-29.1317, -56.5511] },
  { nome: "Chiapeta", pop: "1.860", idh: "0.711", pib: "33.934,21", coord: [-28.0017, -53.9392] },
  { nome: "São Valério do Sul", pop: "2.000", idh: "0.700", pib: "26.000,00", coord: [-27.7908, -53.9367] },
  { nome: "Santo Augusto", pop: "13.800", idh: "0.749", pib: "31.402,90", coord: [-27.8525, -53.7778] },
  { nome: "Coronel Bicaco", pop: "8.000", idh: "0.712", pib: "28.000,00", coord: [-27.7247, -53.7028] },
  { nome: "Braga", pop: "3.200", idh: "0.706", pib: "29.083,43", coord: [-27.6175, -53.74] },
  { nome: "Redentora", pop: "11.600", idh: "0.677", pib: "18.682,31", coord: [-27.6642, -53.6414] },
  { nome: "Dois Irmãos das Missões", pop: "2.400", idh: "0.711", pib: "26.437,84", coord: [-27.6622, -53.5353] },
  { nome: "Erval Seco", pop: "6.000", idh: "0.707", pib: "30.500,00", coord: [-27.5447, -53.5003] },
  { nome: "Taquaruçu do Sul", pop: "2.300", idh: "0.711", pib: "31.083,26", coord: [-27.4003, -53.4706] },
  { nome: "Vista Alegre", pop: "2.000", idh: "0.712", pib: "33.000,00", coord: [-27.3689, -53.4917] },
  { nome: "Palmitinho", pop: "6.800", idh: "0.720", pib: "31.200,00", coord: [-27.3594, -53.5575] },
  { nome: "Vista Gaúcha", pop: "2.900", idh: "0.713", pib: "31.799,58", coord: [-27.2911, -53.6961] },
  { nome: "Pinheirinho do Vale", pop: "2.100", idh: "0.709", pib: "28.000,00", coord: [-27.2092, -53.6083] },
  { nome: "Barra do Guarita", pop: "3.300", idh: "0.685", pib: "20.897,56", coord: [-27.1925, -53.7103] },
  { nome: "Derrubadas", pop: "3.000", idh: "0.695", pib: "25.883,27", coord: [-27.2642, -53.8586] },
  { nome: "Tenente Portela", pop: "13.400", idh: "0.744", pib: "31.847,34", coord: [-27.3714, -53.7586] },
  { nome: "Miraguaí", pop: "4.700", idh: "0.700", pib: "24.000,00", coord: [-27.4975, -53.6894] },
  { nome: "Bossoroca", pop: "6.283", idh: "0.702", pib: "32.344,40", coord: [-28.7292, -54.9036] },
  { nome: "São Luiz Gonzaga", pop: "33.293", idh: "0.742", pib: "39.507,27", coord: [-28.4069, -54.9553] }
];

// Adiciona marcadores para cidades listadas
// Função com cores bem vivas e distintas
function getCorPorPopulacao(populacao) {
    if (populacao <= 5000) return "#FFA500";        // Laranja
    else if (populacao <= 15000) return "#FF0000";  // Vermelho
    else if (populacao <= 30000) return "#1E90FF";  // Azul
    else return "#FF00FF";                          // Rosa forte
}

// Adiciona marcadores com as novas cores
cidades.forEach(cidade => {
    const pop = parseInt(cidade.pop.replace(/[^\d]/g, '')); // remove pontos/virgulas
    const cor = getCorPorPopulacao(pop);

    const marker = L.circleMarker(cidade.coord, {
        radius: 8,
        fillColor: cor,
        color: "#fff",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.9
    }).addTo(map);

    marker.bindTooltip(
        `<strong>${cidade.nome}</strong><br>População: ${cidade.pop}<br>IDH: ${cidade.idh}<br>PIB per capita: R$ ${cidade.pib}<br>Colportor: ${cidade.colportor}<br>Distância Santo Ângelo: ${cidade.distancia} Km`,
        { permanent: false, direction: "top" }
    );
});

// Legenda com as cores vivas
const legenda = L.control({ position: "bottomright" });

legenda.onAdd = function () {
    const div = L.DomUtil.create("div", "info legend");
    const faixas = [
        { limite: "até 5.000", cor: "#FFA500" },
        { limite: "5.001 – 15.000", cor: "#FF0000" },
        { limite: "15.001 – 30.000", cor: "#1E90FF" },
        { limite: "30.001 – 100.000", cor: "#FF00FF" }
    ];

    div.innerHTML += "<h4>População</h4>";
    faixas.forEach(faixa => {
        div.innerHTML +=
            `<i style="background:${faixa.cor}; width: 18px; height: 18px; float: left; margin-right: 8px; opacity: 0.9;"></i>` +
            `${faixa.limite}<br>`;
    });

    return div;
};

legenda.addTo(map);
