function Set() {
    var items = {}

    this.add = function (value) {
        //adicionar um novo item ao conjunto
        if (!this.has(value)) {
            items[value] = value
            return true
        }
        return false
    }

    this.delete = function (value) {
        //remove um valor do conjunto
        if (this.has(value)) {
            delete items[value]
            return true
        }
        return false
    }

    this.has = function (value) {
        //devolve se o valor existe ou nao
        return items.hasOwnProperty(value)
    }

    this.clear = function () {
        //remove todos os itens do conjunto
        items = {}
    }

    this.size = function () {
        //retorna o tamanho do conjunto
        return Object.keys(items).length
    }

    this.values = function () {
        //retorna um array com todos os valores do conjunto
        var values = [],
            keys = Object.keys(items)
        for (var i = 0; i < keys.length; i++) {
            values.push(items[keys[i]])
        }
        return values
    }
}