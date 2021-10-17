const puppeteer = require('puppeteer');
const fetch = require('cross-fetch')
const configs = require('../configs')


// Retorna um array de objetos que mostram a quantidade de ligação de todos os técnicos
async function queue_stats(page) {
    const arr = []

        const data = await page.evaluate(() => {
            const selector = document.querySelectorAll('queue-stat td')
            const list = [...selector]
            const arrayList = list.map(item => {return item.outerText})
            return arrayList
        })

        data.splice(0, 6)

        obj = {
            "waiting": data[0],
            "serviced": data[1],
            "abandoned": data[2],
            "longest_waiting": data[3],
            "average_waiting_time": data[4],
            "average_talking_time": data[5],
        }
    
        return obj
}

// Retorna um objeto com status gerais
async function queue_agents(page) {
    const arr = []

    const name = await page.evaluate(() => {
        const selector = document.querySelectorAll('queue-agents a')
        const list = [...selector]
        const arrayList = list.map(item => {return item.outerText}).filter(item => {return item != "Q"})
        return arrayList
    })

    const data = await page.evaluate(() => {
        const selector = document.querySelectorAll('queue-agents span')
        const list = [...selector]
        const arrayList = list.map(item => {return item.outerText}).map(item => {
            if(item.slice(0, 6) == "Logado") {
                return item.slice(0, 6)
            } else if(item.slice(0, 9) == "Deslogado") {
                return item.slice(0, 9)
            } else {
                return item
            }
        })
        return arrayList
    })

    let counterData = 0, counterName = 0
    while(name.length > counterName) {
        data.splice(counterData, 0, name[counterName])
        counterName ++
        counterData += 5
    }

    for (let i = 0; i < data.length; i += 5) {
        obj = {
            user: data[i],
            logged: data[i + 1],
            answered: data[i + 2],
            abandoned: data[i + 3],
            talk_time: data[i + 4],
        }
        arr.push(obj)
    }

    return arr
}

// Retorna um array de objetos com os tecnicos que estão em ligação
async function active_calls(page) {

}

// Faz o post na api
async function connectionApi(data) {
    try {
        await fetch(configs.ipMachine + '4000/api', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    } catch {
        console.log('Erro, verifique a conexão com a api')
    }
}


// Cria o JSON que será feito o post e já chama a conexão com a api
async function CreateJSON(page) {
    try {
        data_active_calls = await active_calls(page)
        data_queue_agents = await queue_agents(page)
        data_queue_stats = await queue_stats(page)

        data = {
            "active_calls": data_active_calls,
            "queue_agents": data_queue_agents,
            "queue_stats": data_queue_stats
        }
    } catch {
        console.log('Erro, verifique se o firefox não sofreu alguma alteração')
    }

    connectionApi(data)
}

// Function main... Abre o navegador e chama as demais funções
(async () => {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    // - Acessa página de login
    await page.goto(configs.urlLogin)

    // - Loga na página
    await page.type('#loginInput', configs.user)
    await page.type('#passwordInput', configs.password)
    await page.click('#submitBtn')


    // - Acessa página de wallboard
    await page.waitForTimeout(3000)
    await page.goto(configs.urlWallboard)

    await page.waitForTimeout(3000)

    setInterval(() => {
        CreateJSON(page)
    }, 5000)
})()
