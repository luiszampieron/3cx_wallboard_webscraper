const puppeteer = require('puppeteer');
const fetch = require('cross-fetch')
const configs = require('../configs')


// Retorna um objeto com status gerais
async function queue_stats(page) {
    const arr = []

    const data = await page.evaluate(() => {
        const selector = document.querySelectorAll('queue-stat td')
        const list = [...selector]
        const arrayList = list.map(item => { return item.outerText })
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

// Retorna um array de objetos que mostram a quantidade de ligação de todos os técnicos
async function queue_agents(page) {
    const arr = []

    const getName = await page.evaluate(() => {
        const selector = document.querySelectorAll('queue-agents a')
        const list = [...selector]
        const arrayList = list.map(item => { return item.outerText }).filter(item => { return item != "Q" })
        return arrayList
    })

    const isOnline = await page.evaluate(() => {
        const selector = document.querySelectorAll('wcavatar i')
        const list = [...selector]
        const arrayList = list.map(item => { return item.className }).map(item => item.split(' ')).map(item => {
            if (item.indexOf("away") > -1) {
                return 'Ausente'
            } else if (item.indexOf("off") > -1) {
                return 'Deslogado'
            } else if (item.indexOf("available") > -1) {
                return 'Disponível'
            } else if (item.indexOf("busy") > -1) {
                return 'Atendimento'
            } else {
                return 'Ocupado'
            }
        })
        return arrayList
    })

    const getData = await page.evaluate(() => {
        const selector = document.querySelectorAll('queue-agents span')
        const list = [...selector]
        const arrayList = list.map(item => { return item.outerText }).map(item => {
            if (item.slice(0, 6) == "Logado") {
                return item = true
            } else if (item.slice(0, 9) == "Deslogado") {
                return item = false
            } else {
                return item
            }
        })
        return arrayList
    })

    let counterData = 0, counterName = 0
    while (getName.length > counterName) {
        getData.splice(counterData, 0, getName[counterName])
        getData.splice(counterData + 1, 0, isOnline[counterName])
        counterName++
        counterData += 6
    }

    for (let i = 0; i < getData.length; i += 6) {
        obj = {
            user: getData[i],
            status: getData[i + 1],
            logged: getData[i + 2],
            answered: getData[i + 3],
            abandoned: getData[i + 4],
            talk_time: getData[i + 5],
        }

        if (obj.answered != "0") {
            arr.push(obj)
        }
    }
    return arr
}

// Retorna um array de objetos com os tecnicos que estão em ligação
async function active_calls(page) {
    const arr = []

    const getData = await page.evaluate(() => {
        const selector = document.querySelectorAll('active-calls div.grid-item')
        const list = [...selector]
        const arrayList = list.map(item => { return item.innerText }).filter(item => {
            if (item != "" && item.slice(0, 15) != "Chamada externa") { return item } })
        arrayList.splice(0, 4)
        return arrayList
    })

    for (let i = 0; i < getData.length; i += 3) {
        obj = {
            phone: getData[i],
            user: getData[i + 1],
            time_called: getData[i + 2],
        }
        arr.push(obj)
    }
    return arr
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
