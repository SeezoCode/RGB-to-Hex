const EventHandling = {
    data() {
        return {
            message: 'Result',
            input: ''
        }
    },
    methods: {
        match() {
            console.log(this.input)

            try {
                if (/^rgb/i.test(this.input)) {
                    console.log('rgb')
                    // console.log(/\d+[\D]*\d+,?\d+/g.exec(input))
                    // console.log(input.match(/\d+/g))
                    let hexArr = []
                    for (let elem of this.input.match(/\d+/g)) {
                        elem = Number(elem).toString(16)
                        if (elem.length < 2) elem = '0' + elem
                        hexArr.push(elem)
                    }
                    this.message = '#' + hexArr.join('')
                }

                if (/^#/.test(this.input)) {
                    console.log('hex')
                    if (String(/\S*$/i.exec(this.input)).length > 7) {
                        this.message = 'Too long'
                        return
                    }
                    if (String(/\S*$/i.exec(this.input)).length < 7) {
                        this.message = `Too short`
                        return
                    }
                    let str = /\S{6}$/ig.exec(this.input)
                    let rgbArr = []
                    for (let i = 0; i < 6; i += 2) rgbArr.push(parseInt(str[0][i] + str[0][i + 1], 16))
                    this.message = `rgb(${rgbArr})`
                }
                document.getElementById('color').style.background = this.message
            }
            catch (e) {
                // console.log(e)

            }
        }
    }
}

Vue.createApp(EventHandling).mount('#handler')

