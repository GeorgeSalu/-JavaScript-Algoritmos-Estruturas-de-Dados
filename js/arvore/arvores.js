function BinarySearchTree() {
    var Node = function (key) {
        this.key = key
        this.left = null
        this.right = null
    }
    var root = null

    this.insert = function () {
        //insere uma chave
        var newNode = new Node(key)

        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    this.search = function (key) {
        //busca uma chave
        return searchNode(root, key)
    }

    var searchNode = function (node, key) {
        if (node === null) {
            return false
        }
        if (key < node.key) {
            return searchNode(node.left, key)
        } else if (key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true
        }
    }

    this.remove = function () {
        //remove a chave
    }

    this.min = function () {
        //retorna a menor chave
    }

    this.max = function () {
        //retorna a maior chave
    }

    this.inOrderTraverse = function () {
        //visita todos os nos da arvore usando um percurso em ordem
    }

    this.preOrderTraverse = function () {
        //visita todos os nos da arvore usando um percurso pre ordem
    }

    this.postOrderTraverse = function () {
        //visita todos os nos da arvore usando um percurso pos ordem
    }
}