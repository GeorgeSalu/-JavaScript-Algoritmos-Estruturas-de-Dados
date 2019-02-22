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

function Graph() {

    var vertices = []
    var adjList = new Dictionary()

    this.addVertex = function (v) {
        vertices.push()
        adjList.set(v, [])
    }

    this.addEdge = function (v, w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }

    this.toString = function () {
        var s = ''
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + ' -> '
            var neighbors = adjList.get(vertices[i])
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' '
            }
            s += '\n'
        }
        return s
    }
}

var graph = new Graph()
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i])
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'D')
graph.addEdge('D', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')

console.log(graph.toString())
