const puppeteer = require('puppeteer');
const fetch = require('cross-fetch')
const configs = require('../configs')


// Retorna um array de objetos que mostram a quantidade de ligação de todos os técnicos
async function queue_agents(page) {

}

// Retorna um objeto com status gerais
async function queue_stats(page) {

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
