new Vue({
    el: '#desafio',
    data: {
        nome: 'Jefferson Nunes Fonseca',
        idade: 27,
        imagem: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        calculoIdade() {
            return this.idade * 3
        },
        valorRandom() {
            return Math.random()
        }
    }
})