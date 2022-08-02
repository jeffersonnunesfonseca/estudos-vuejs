new Vue({
    el: '#desafio',
    data: {
        classe1: 'destaque',
        digitou1: 'destaque',
        digitou2: '',
        quadrado: '',
        msgErro: false,
        estilo3: {},
        width: 0,
        cont: 0

    },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'

            }, 1000);
        },
        iniciarProgresso() {
            if (this.cont < 100) 
                this.cont += 20 
                this.width = `${this.cont}%`

        },
        valorQuadrado() {
            console.log('chamando')
            this.msgErro = false
            if (event.target.value == 'true') {
                this.quadrado = true
            } else if (event.target.value == 'false') {
                this.quadrado = false
            } else {
                this.msgErro = true
            }
        },
        digitou3() {
            let input = event.target.value
            if (input == 'amarelo') {
                this.estilo3 = {
                    "background-color": "yellow",
                    "height": "500px",
                }
            } else if (input == "vermelho") {
                this.estilo3 = {
                    "background-color": "red",
                    "height": "500px",
                }

            }

        }

    }
})