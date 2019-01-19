function Dictionary() {
    var items = {}

    this.set = function (key, value) {
        //adiciona um novo item ao dicionario
        items[key] = value
    }

    this.delete = function (key) {
        //remove o valor do dicionario usando a chave
        if (this.has(key)) {
            delete items[key]
            return true
        }
        return false
    }

    this.has = function (key) {
        //verifica se a chave existe e retorna um boolean
        return items.hasOwnProperty(key);
    }

    this.get = function (key) {
        //devolve um valor especifico a partir da chave
        return this.has(key) ? items[key] : undefined
    }

    this.clear = function () {
        //remove todos os items do dicionario
        items = {}
    }

    this.size = function () {
        //retorna a quantidade de elementos contidos no dicionario
        return Object.keys(items).length
    }

    this.keys = function () {
        //devolve um array com todas as chaves do dicionario
        return Object.keys(items)
    }

    this.values = function () {
        //devolve um array com todos os valores do dicionario
        var values = [],
            keys = Object.keys(items)

        for (var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }
}

var dic = new Dictionary()

dic.set('gandalf', 'gandalf@gmail.com')
dic.set('john', 'john@gmail.com')
dic.set('trion', 'trion@gmail.com')

console.log(dic.has('john'))