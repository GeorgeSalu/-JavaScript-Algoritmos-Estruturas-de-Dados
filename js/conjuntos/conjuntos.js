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

    this.intersection = function (otherSet) {
        var intersectionSet = new Set(),
            values = this.values()

        for (var i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    this.difference = function (otherSet) {
        var differenceSet = new Set(),
            values = this.values()

        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }
        return differenceSet
    }

    this.subset = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false
        } else {
            var values = this.values()

            for (var i = 0; i < values.length(); i++) {
                if (!otherSet.has(values[i])) {
                    return false
                }
            }
            return true
        }
    }
}

var setA = new Set()
setA.add(1)
setA.add(2)

var setB = new Set()
setB.add(1)
setB.add(2)
setB.add(3)

var setC = new Set()
setC.add(2)
setC.add(3)
setC.add(4)

console.log(setA.subset(setB))
console.log(setA.subset(setC))