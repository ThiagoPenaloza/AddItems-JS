class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }

    Adicionar() {
        let produto = this.lerDados();
        if (this.Validar(produto) == true) {
            this.Salvar(produto);
            this.Listar();
        }

        document.getElementById('pdnome').value = '';
        document.getElementById('pdpreco').value = '';
    }

    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('pdnome').value;
        produto.precoProduto = document.getElementById('pdpreco').value;

        return produto;
    }

    Validar(produto) {
        let msg = '';

        if (produto.nomeProduto == '') {
            msg += 'Por favor, insira corretamente o nome do produto! \n'
        }

        if (produto.precoProduto == '') {
            msg += 'Por favor, insira corretamente o preço do produto! \n'
        }

        if (msg != '') {
            alert(msg);
            return false;
        }

        return true;
    }

    Salvar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    Listar() {
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = 'R$' + this.arrayProdutos[i].precoProduto;

            let imagem = document.createElement('img');
            imagem.src = 'del.png';
            imagem.setAttribute('data-id', this.arrayProdutos[i].id);
            imagem.setAttribute('class', 'btn-excluir');
            imagem.addEventListener('click', () => this.Excluir(imagem));
            td_del.appendChild(imagem);
        }
    }

    Excluir(imagem) {
        let id = imagem.getAttribute('data-id');
        let index = this.arrayProdutos.findIndex(p => p.id == id);
        this.arrayProdutos.splice(index, 1);
        this.Listar();
    }
}

var produto = new Produto();
document.getElementById('btn').addEventListener('click', () => produto.Adicionar());
