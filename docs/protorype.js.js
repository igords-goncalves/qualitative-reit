//TODO: O objeto filtros vai receber através de um formulário, os valores dinâmico

const filtros = {
  // Segment: "",
  // Gestao: "",
  // my_range: "",
  // dy: { Item1: null, Item2: null },
  // p_vp: { Item1: null, Item2: null },
  // percentualcaixa: { Item1: null, Item2: null },
  // numerocotistas: { Item1: null, Item2: null },
  // dividend_cagr: { Item1: null, Item2: null },
  // cota_cagr: { Item1: null, Item2: null },
  // liquidezmediadiaria: { Item1: null, Item2: null },
  // patrimonio: { Item1: null, Item2: null },
  // valorpatrimonialcota: { Item1: null, Item2: null },
  // numerocotas: { Item1: null, Item2: null },
  // lastdividend: { Item1: null, Item2: null },
};

const queryString = encodeURIComponent(JSON.stringify(filtros));

console.log(queryString) //%7B%7D

const urlBase =
  "https://statusinvest.com.br/category/advancedsearchresultpaginated";

// const urlFinal = `${urlBase}?search=${queryString}&orderColumn=&isAsc=&page=1&take=10&CategoryType=2`;
// const urlFinal = `${urlBase}?search=${queryString}&page=1&take=10&CategoryType=2`;
const urlFinal = `${urlBase}?search=${queryString}&page=1&take=1&CategoryType=2`;

fetch(urlFinal)
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    console.log(response.list.length)
    console.log(response);
  })
  .catch((err) => {
    console.error("Erro na requisição:", err);
  });
