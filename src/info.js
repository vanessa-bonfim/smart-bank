/* 
  Define um objeto chamado extractList com uma propriedade chamada updates,
  que contém uma matriz de objetos representando atualizações.
  Cada objeto na matriz possui as seguintes propriedades: id, type, value, date e from.
  Pode ser usado para armazenar e acessar informações sobre atualizações.
*/
export const extractList = {
  updates: [
    {
      id: "123131321", // ID da atualização
      type: "Restaurante", // Tipo da atualização (por exemplo, Restaurante, Utilidades, Saúde, Transporte, Outros)
      value: "150,00", // Valor da atualização
      date: "11 JUN", // Data da atualização
      from: "Bonna Parma", // Fonte da atualização (por exemplo, o nome do restaurante, a empresa de utilidades, etc.)
    },
    // Outras atualizações seguem a mesma estrutura
    {
      id: "4564654",
      type: "Utilidades",
      value: "130,00",
      date: "9 JUN",
      from: "CPFL *energia",
    },
    {
      id: "65445",
      type: "Saúde",
      value: "15,00",
      date: "8 JUN",
      from: "Farma Ponte",
    },
    {
      id: "656565",
      type: "Transporte",
      value: "15,00",
      date: "8 JUN",
      from: "Uber",
    },
    {
      id: "926544",
      type: "Outros",
      value: "150,00",
      date: "5 JUN",
      from: "AliExpress",
    },
  ],
};
