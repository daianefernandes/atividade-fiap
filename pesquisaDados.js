function pesquisaDados() {

    var conteudo = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station<br></body></html>";

    //nome cidades avaliadas
    var cidade1 = conteudo.substr(93, 9);
    alert("A primeira cidade é " + cidade1);

    var cidade2 = conteudo.substr(643, 9);
    alert("A segunda cidade é " + cidade2);

    var cidade3 = conteudo.substr(1281, 6);
    alert("A terceira cidade é " + cidade3);
    // -----------------------------------------------

    //roteiros A
    var saoPauloRoteiroA = conteudo.substr(397, 33);
    alert("O roteiro A de São Paulo contém: " + saoPauloRoteiroA);

    var VegasRoteiroA = conteudo.substr(984, 55);
    alert("O roteiro A de Las Vegas contém: " + VegasRoteiroA);

    var MoscouRoteiroA = conteudo.substr(1509, 70);
    alert("O roteiro A de Moscou contém: " + MoscouRoteiroA);
    // -----------------------------------------------

    //pontos turísticos do centro de SP
    var pontosTuristicosSP = conteudo.substr(465, 45);
    alert("Os pontos turísticos do Centro de SP são: " + pontosTuristicosSP);
    // -----------------------------------------------

    //pontos turísticos de Downtown, Las Vegas
    var pontosTuristicosLV = conteudo.substr(1078, 65);
    alert("Os pontos turísticos de Downtown, Las Vegas contém: " + pontosTuristicosLV);
    // -----------------------------------------------
}

pesquisaDados();