const { Produto, CarrinhoDeCompras, Loja } = require('./app')

describe('Testes para a classe Produto', () => {
  test('Testa a criação de um produto com estoque', () => {
    const produto = new Produto('Hidratante', 19.99, 5, 'SKNBK100');
    expect(produto).toHaveProperty('nome');
    expect(produto).toHaveProperty('preco');
    expect(produto).toHaveProperty('estoque');
    expect(produto.estoque).toBe(5);
  });

  test('Testa a criação de um produto sem estoque', () => {
    const produto = new Produto('Hidratante', 19.99, 0, 'SKNBK100');
    expect(produto.estoque).toBe(0);
  });
});

describe('Testes para a classe Loja', () => {
  test('Testa a criação de uma loja', () => {
    const loja = new Loja();
    expect(loja).toHaveProperty('produtos');
  });

  test('Testa adicionar um novo produto à loja', () => {
    const loja = new Loja();
    const produto = new Produto('Hidratante', 19.99, 5, 'SKNBK100');
    loja.adicionarProdutoAosProdutos(produto);
    expect(loja.produtos).toContain(produto);
  });

  test('Testa adicionar um produto já existente à loja', () => {
    const loja = new Loja();
    const produto = new Produto('Hidratante', 19.99, 5, 'SKNBK100');
    loja.adicionarProdutoAosProdutos(produto);
    expect(() => loja.adicionarProdutoAosProdutos(produto)).toThrow('Produto já cadastrado');
  });

  test('Testa remover um produto existente da loja', () => {
    const loja = new Loja();
    const produto = new Produto('Hidratante', 19.99, 5, 'SKNBK100');
    loja.adicionarProdutoAosProdutos(produto);
    loja.removerProdutoDosProdutos(produto);
    expect(loja.produtos).not.toContain(produto);
  });

  test('Testa remover um produto inexistente da loja', () => {
    const loja = new Loja();
    const produto = new Produto('Hidratante', 19.99, 5, 'SKNBK100');
    expect(() => loja.removerProdutoDosProdutos(produto)).toThrow('Produto não encontrado');
  });

  test('Testa buscar um produto existente por SKU', () => {
    const loja = new Loja();
    const produto = new Produto('Hidratante', 19.99, 5, 'SKNBK100');
    loja.adicionarProdutoAosProdutos(produto);
    expect(loja.buscaProdutoPorSku('SKNBK100')).toBe(produto);
  });

  test('Testa buscar um produto inexistente por SKU', () => {
    const loja = new Loja();
    expect(() => loja.buscaProdutoPorSku('SKNBK102')).toThrow('Produto não encontrado');
  });

});

describe('Testes para a classe CarrinhoDeCompras', () => {
  test('Testa a criação de um carrinho de compras', () => {
    const carrinho = new CarrinhoDeCompras();
    expect(carrinho).toHaveProperty('produtos');
  });

  test('Testa adicionar um produto da loja com estoque no carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    const produto = new Produto('Hidratante', 19.99, 5, 'SKNBK100');
    const loja = new Loja();
    loja.adicionarProdutoAosProdutos(produto);
    carrinho.adicionarProduto(loja.buscaProdutoPorSku('SKNBK100'));
    expect(carrinho.produtos).toContain(produto);
  });

  test('Testa adicionar um produto da loja sem estoque no carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    const produto = new Produto('Hidratante', 19.99, 0, 'SKNBK100');
    const loja = new Loja();
    loja.adicionarProdutoAosProdutos(produto);
    expect(() => carrinho.adicionarProduto(loja.buscaProdutoPorSku('SKNBK100'))).toThrow('Produto sem estoque');
  });

  test('Testa remover um produto do carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    const produto = new Produto('Hidratante', 19.99, 5, 'SKNBK100');
    carrinho.adicionarProduto(produto);
    carrinho.removerProduto(produto);
    expect(carrinho.produtos).not.toContain(produto);
  });

  test('Testa calcular o total do carrinho', () => {
    const carrinho = new CarrinhoDeCompras();
    const produto1 = new Produto('Hidratante', 19.99, 5, 'SKNBK100');
    const produto2 = new Produto('Protetor solar', 29.99, 5, 'SKNBK101');
    carrinho.adicionarProduto(produto1);
    carrinho.adicionarProduto(produto2);
    expect(carrinho.calcularTotal()).toBe(49.98);
  });
});