const { Produto, CarrinhoDeCompras, Loja } = require('./app')

describe('Testes para a classe Produto com estoque', () => {
  test('Testa a criação de um produto', () => {
    const produto = new Produto('Hidratante', 19.99, 5);
    expect(produto).toHaveProperty('nome');
    expect(produto).toHaveProperty('preco');
    expect(produto).toHaveProperty('estoque');
    expect(produto.estoque).toBe(5);
  });

  test('Testa a criação de um produto sem estoque', () => {
    const produto = new Produto('Hidratante', 19.99);
    expect(produto.estoque).toBe(0);
  });
});

describe('Testes para a classe CarrinhoDeCompras', () => {
  test('Testa a criação de um carrinho de compras', () => {
    const carrinho = new CarrinhoDeCompras();
    expect(carrinho).toHaveProperty('produtos');
  });

  test('Testa adicionar um produto com estoque no carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    const produto = new Produto('Hidratante', 19.99, 5);
    carrinho.adicionarProduto(produto);
    expect(carrinho.produtos).toContain(produto);
  });

  test('Testa adicionar um produto sem estoque no carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    const produto = new Produto('Hidratante', 19.99);
    expect(() => carrinho.adicionarProduto(produto)).toThrow('Produto sem estoque');
  });

  test('Testa remover um produto do carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    const produto = new Produto('Hidratante', 19.99, 5);
    carrinho.adicionarProduto(produto);
    carrinho.removerProduto(produto);
    expect(carrinho.produtos).not.toContain(produto);
  });

  test('Testa calcular o total do carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    const produto1 = new Produto('Hidratante', 19.99, 5);
    const produto2 = new Produto('Protetor solar', 29.99, 5);
    carrinho.adicionarProduto(produto1);
    carrinho.adicionarProduto(produto2);
    expect(carrinho.calcularTotal()).toBe(49.98);
  });
});

describe('Testes para a classe Loja', () => {
  test('Testa a criação de uma loja', () => {
    const loja = new Loja();
    expect(loja).toHaveProperty('produtos');
  });

  test('Testa adicionar um produto à loja', () => {
    const loja = new Loja();
    const produto = new Produto('Hidratante', 19.99, 5);
    loja.adicionarProdutoAosProdutos(produto);
    expect(loja.produtos).toContain(produto);
  });

  test('Testa remover um produto da loja', () => {
    const loja = new Loja();
    const produto = new Produto('Hidratante', 19.99, 5);
    loja.adicionarProdutoAosProdutos(produto);
    loja.removerProdutoDosProdutos(produto);
    expect(loja.produtos).not.toContain(produto);
  });


});