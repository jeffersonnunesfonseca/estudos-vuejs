new Vue({
    el: '#desafio',
    data: {
        classe1: 'destaque',
        digitou1: 'destaque',
        digitou2: '',
        quadrado: '',
        msgErro: false,
        estilo3: {}
        // teste2: {
        //     background: 'red',
        //     width: '300px',
        //     height: '300px'
        // }

    },
    // watch: {
    //     quadrado(event, novo, velho) {
    //         console.log(`typeof(novo): ${typeof(novo)}`, `typeof(velho) ${typeof(velho)}`)
    //         //     // this.quadrado = this.quadrado == 'true' ? true : false
    //         // if (novo == 'true') {
    //         //     this.quadrado = true
    //         // }

    //     }
    // },
    // computed: {
    //     quadrado() {
    //         console.log(this.quadrado)
    //     }
    // },
    methods: {
        iniciarEfeito() {
            setInterval(() => {
                this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'

            }, 1000);
        },
        iniciarProgresso() {

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