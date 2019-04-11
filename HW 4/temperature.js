window.onload = function(){
    const app = document.getElementById('root')

    const p = document.createElement('p')

    const label = document.createElement('label')
    label.textContent = 'Converter'

    const text = document.createElement('input')
    text.setAttribute('type', 'number')
    text.setAttribute('id', 'temp')

    const radioF = document.createElement('input')
    radioF.setAttribute('type', 'radio')
    radioF.setAttribute('id', 'toF')
    radioF.setAttribute('name', 'unit')
    radioF.setAttribute('value', 'to Fahrenhiet')

    const radioFLabel = document.createElement('FLabel')
    radioFLabel.textContent = 'to Fahrenheit'

    const radioC = document.createElement('input')
    radioC.setAttribute('type', 'radio')
    radioC.setAttribute('id', 'toC')
    radioC.setAttribute('name', 'unit')
    
    const radioCLabel = document.createElement('CLabel')
    radioCLabel.textContent = 'to Celcius'

    const button = document.createElement('input')
    button.setAttribute('type', 'button')
    button.setAttribute('value', 'to C')
    button.setAttribute('id', 'btnConvert')
    button.setAttribute('onclick', 'convert()')

    const output = document.createElement('output')

    console.log(label.textContent)
    p.appendChild(label)
    p.appendChild(text)
    
    p.appendChild(radioF)
    p.appendChild(radioFLabel)
    p.appendChild(radioC)
    p.appendChild(radioCLabel)
    p.appendChild(button)
    p.appendChild(output)
    app.appendChild(p)

    const convert = () => {
        const temp = document.getElementById('temp').value
        let result = 0

        // result = (temp - 32) / 1.8
        if(document.getElementById('toC').checked){
            console.log('to celcius')
            result = (parseInt(temp) - 32) / 1.8
            console.log(result)
        }
        else{
            console.log('to fahrenheit')
            result = (parseInt(temp) * 1.8)
            console.log(result)
            result = result + 32
            console.log(result)
        }

        console.log(result)
        
        const output = result
        document.querySelector('output').innerHTML = output
    }
    
    document.getElementById('btnConvert').addEventListener('click', function(){convert('F')}, false)
    
    
    

    

}
