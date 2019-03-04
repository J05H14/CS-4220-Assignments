const superagent = require('superagent')

// SIMPLE EXAMPLES USING SUPERAGENT
const url = 'https://api.cdnjs.com/librariess'
const example1 = () => {
    superagent.get(url)
        .then(response => {
            console.log(response.body)
        })
        .catch(error => {
            console.log(error)
        })
}
 // example1()


async function example2() {
    try {
        const response = await superagent.get(url)
        console.log(response.body)
    } catch (error) {
        console.log(error)
    }
}
// example2()


// ASYNC WITH SUPER AGENT
const urls = ['https://www.yahoo.com/', 'https://www.google.com', 'https://www.bing.com/']

const responseTime = (urls) => {
    const results = []

    urls.forEach(url => {
        const start = new Date()

        superagent
            .get(url)
            .end((err, response) => {
                const end = new Date()
                const data = {
                    url: url,
                    status: response.statusCode,
                    time: (end - start)
                }
                results.push(data)
                // console.log(result)

                if (urls.length === results.length)
                    console.log(results)
            })
    })

    console.log('Final', results)
}
responseTime(urls)