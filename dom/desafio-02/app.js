new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            return alert('Ola Mundo')
        },
        bindKeyDown(e) {
            this.valor = e.target.value
        }

    }
})