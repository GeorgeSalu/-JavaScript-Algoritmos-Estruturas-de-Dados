function LinkedList() {
    var Node = function (element) {
        this.element = element;
        this.next = null
    }

    var length = 0;
    var head = null;

    this.append = function (element) {
        //adiciona um elemento no final da lista
        var node = new Node(element),
            current

        if (head === null) {
            head = node
        } else {
            current = head

            while (current.next) {
                current = current.next
            }

            current.next = node
        }
        length++
    }

    this.insert = function (position, element) {
        //adiciona um elemento em uma posicao especifica
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previos,
                index = 0;

            if (position === 0) {
                node.next = current
                head = node
            } else {
                while (index++ < position) {
                    previos = current
                    current = current.next
                }
                node.next = current
                previos.next = node
            }
            length++
            return true
        } else {
            return false
        }
    }

    this.removeAt = function (position) {
        //remove o elemento de uma posicao especifica
        if (position > -1 && position < length) {
            var current = head,
                previos,
                index = 0

            if (position === 0) {
                head = current.next
            } else {
                while (index++ < position) {
                    previos = current
                    current = current.next
                }
                previos.next = current.next
            }
            length--
            return current.element;
        } else {
            return null;
        }
    }

    this.remove = function (element) {
        //remove o elemento element
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    this.indexOf = function (element) {
        //retorna a posicao do elemento
        var current = head,
            index = 0;

        while (current) {
            if (element === current.element) {
                return index;
            }
            index++
            current = current.next
        }
        return - 1
    }

    this.isEmpty = function () {
        //retorna se esta vazia ou nao
        return length === 0
    }

    this.size = function () {
        //retorna o tamanho da instancia
        return length;
    }

    this.getHead = function () {
        return head;
    }

    this.toString = function () {
        //converte em string
        var current = head,
            string = '';

        while (current) {
            string += current.element + ' '
            current = current.next
        }

        return string
    }

    this.print = function () {
        //imprime no console
        console.log(this.toString());
    }
}


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


function HashTable() {
    var table = []


    var valuePair = function (key, value) {
        this.key = key
        this.value = value
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']'
        }
    }

    /*this.put = function (key, value) {
        //insere elemento
        var position = loseloseHashCode(key)
        console.log(position + ' ' + key)
        table[position] = value
    }*/
    this.put = function (key, value) {
        //insere elemento
        var position = loseloseHashCode(key)

        if (table[position] === undefined) {
            table[position] = new LinkedList()
        }
        table[position].append(new valuePair(key, value));
    }

    /*this.remove = function (key) {
        //remove elemento
        table[loseloseHashCode(key)] = undefined
    }*/
    this.remove = function (key) {
        //remove elemento
        var position = loseloseHashCode(key)

        if (table[position] !== undefined) {
            var current = table[position].getHead()

            while (current.next) {
                if (current.element.key === key) {
                    table[position].remove(current.element)
                    if (table[position].isEmpty()) {
                        table[position] = undefined
                    }
                    return true
                }
                current = current.next
            }
            if (current.element.key === key) {
                table[position].remove(current.element)
                if (table[position].isEmpty()) {
                    table[position] = undefined
                }
                return true
            }
        }
        return false
    }


    /*this.get = function (key) {
        //retorna um valor
        return table[loseloseHashCode(key)]
    }*/
    this.get = function (key) {
        //retorna um valor
        var position = loseloseHashCode(key)

        if (table[position] !== undefined) {
            var current = table[position].getHead()

            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value
                }
                current = current.next
            }
            if (current.element.key === key) {
                return current.element.value
            }
        }
        return undefined
    }

    var loseloseHashCode = function (key) {
        //retorna hash (valor numerico)
        var hash = 0
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % 37
    }

    this.print = function () {
        for (var i = 0; i < table.length; i++) {
            if (table[i] !== undefined) {
                console.log(i + ' : ' + table[i])
            }
        }
    }
}

/*
var dic = new Dictionary()

dic.set('gandalf', 'gandalf@gmail.com')
dic.set('john', 'john@gmail.com')
dic.set('trion', 'trion@gmail.com')

console.log(dic.has('john'))
*/
var hash = new HashTable()

hash.put('gandalf', 'gandalf@gmail.com')
hash.put('john', 'john@gmail.com')
hash.put('trion', 'trion@gmail.com')
hash.put('aron', 'aron@gmail.com')
hash.put('donie', 'donie@gmail.com')
hash.put('jame', 'jame@gmail.com')
hash.put('sue', 'sue@gmail.com')
hash.put('mindi', 'mindi@gmail.com')
hash.put('Paul', 'paul@gmail.com')
hash.put('nathan', 'nathan@gmail.com')
hash.put('tirion', 'tirion@gmail.com')

hash.print()

console.log(hash.remove('MArcos'))
console.log(hash.remove('john'))
console.log(hash.remove('Paul'))