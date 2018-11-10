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
    }

    this.indexOf = function (element) {
        //retorna a posicao do elemento
    }

    this.isEmpty = function () {
        //retorna se esta vazia ou nao
    }

    this.size = function () {
        //retorna o tamanho da instancia
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

var ll = new LinkedList()
ll.append('joao')
ll.append('jose')
ll.append('maria')

ll.print();
ll.insert(0, 'carlos')
ll.print()
ll.insert(2, 'Ana')
ll.print()
//console.log('foi removido ' + ll.removeAt(0))