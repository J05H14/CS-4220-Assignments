window.onload = function(){
    const app = document.getElementById('root')

    const title = document.createElement('div')

    const instructions = document.createElement('h1')
    instructions.textContent = 'Enter the Temperature to be Converted'

    const inp = document.createElement('input')
    inp.setAttribute('type', 'text')
    inp.setAttribute('id', 'temp')

    const tempPick = document.createElement('div')

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
    button.setAttribute('value', 'Submit')
    button.setAttribute('id', 'btnConvert')
    button.setAttribute('onclick', 'convert()')

    const out = document.createElement('h2')

    const output = document.createElement('output')

    title.appendChild(instructions)
    title.appendChild(inp)
    
    tempPick.appendChild(radioF)
    tempPick.appendChild(radioFLabel)
    tempPick.appendChild(radioC)
    tempPick.appendChild(radioCLabel)
    tempPick.appendChild(button)
    out.appendChild(output)
    app.appendChild(title)
    app.appendChild(tempPick)
    app.appendChild(out)

    const convert = () => {
        const temp = document.getElementById('temp').value
        const toC = document.getElementById('toC')
        const toF = document.getElementById('toF')

        console.log(temp)
        let result = 0

        if(temp == '' || (!toC.checked && !toF.checked)){
            const blankErr = 'Must Input a Temperature AND Select a Unit'
            document.querySelector('output').innerHTML = blankErr
        }
        else if(temp != '' & isNaN(temp)){
            const nanErr = 'Input MUST be a Number'
            document.querySelector('output').innerHTML = nanErr
        }

        else{
            // result = (temp - 32) / 1.8
            if(toC.checked){
                console.log('to celcius')
                result = (parseInt(temp) - 32) / 1.8
                console.log(result)
            }
            else{
                console.log('to fahrenheit')
                result = (parseInt(temp) * 1.8) + 32
                console.log(result)
            }

            console.log(result)
            
            const output = result
            document.querySelector('output').innerHTML = output
        }
    }
    
    document.getElementById('btnConvert').addEventListener('click', function(){convert('F')}, false)
}
