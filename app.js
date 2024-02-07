class Produto {
  constructor(nome, preco, estoque = 0, sku) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    this.sku = sku;
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

  buscaProdutoPorSku(sku) {
    const produto = this.produtos.find((produto) => produto.sku === sku);
    if (!produto) throw new Error('Produto não encontrado');
    return produto;
  }

  adicionarProdutoAosProdutos(produto) {
    if (this.produtos.includes(produto)) throw new Error('Produto já cadastrado');
    this.produtos.push(produto);
  }

  removerProdutoDosProdutos(produto) {
    if (!this.produtos.includes(produto)) throw new Error('Produto não encontrado');
    this.produtos = this.produtos.filter((item) => item !== produto);
  }
}

module.exports = { Produto, CarrinhoDeCompras, Loja };