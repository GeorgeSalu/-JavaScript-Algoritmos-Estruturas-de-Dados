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

    this.union = function (otherSet) {
        var unionSet = new Set(),
            values = this.values()

        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values()

        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        return unionSet
    }
}

var setA = new Set()

setA.add(1)
setA.add(2)
setA.add(3)
setA.add(4)
setA.add(4)

var setB = new Set()
setB.add(5)
setB.add(6)
setB.add(7)

var unionAB = setA.union(setB)
console.log(unionAB.values())