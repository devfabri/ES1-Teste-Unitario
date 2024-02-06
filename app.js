class Produto {
  constructor(nome, preco, estoque = 0) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }
}

class CarrinhoDeCompras {
  constructor() {
    this.produtos = [];
  }

  adicionarProduto(produto) {
    if (produto.estoque === 0) throw new Error('Produto sem estoque');
    this.produtos.push(produto);
  }

  removerProduto(produto) {
    this.produtos = this.produtos.filter((item) => item !== produto);
  }

  calcularTotal() {
    let total = 0;
    this.produtos.forEach((produto) => {
      total += produto.preco;
    });
    return total
  }
}

class Loja {
  constructor() {
    this.produtos = [];
  }

  adicionarProdutoAosProdutos(produto) {
    this.produtos.push(produto);
  }

  removerProdutoDosProdutos(produto) {
    this.produtos = this.produtos.filter((item) => item !== produto);
  }


}

module.exports = { Produto, CarrinhoDeCompras, Loja };