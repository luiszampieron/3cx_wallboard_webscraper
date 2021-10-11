const { Builder, By, Key, until, element } = require('selenium-webdriver')
const fetch = require('cross-fetch')
const configs = require('../configs')


// Retorna um array de objetos que mostram a quantidade de ligação de todos os técnicos
async function queue_agents(driver) {
    const arr = []

    const elements = await driver.findElements(By.css("ul"));
    const element = await elements[1].getText()
    const arrayElement = element.split('\n')

    // Remove as informações de Login e as iniciais da foto de perfil
    for (let i = 0; i < arrayElement.length; i++) {
        if (arrayElement[i].length == 2 || arrayElement[i].slice(0, 1) == "Q") {
            arrayElement.splice(i, 1) 
            i = 0
        }
    }

    // Remove os técnicos que não tiveram ligações
    for (let i = 0; i < arrayElement.length; i++) {
        if (arrayElement[i].slice(0, 1) == "0") {
            arrayElement.splice(i - 1, 2)
            i = 0
        }
    }

    // Adiciona as informações no Array
    for (let i = 0; i < arrayElement.length; i += 2) {
        obj = {
            user: arrayElement[i],
            serviced_abandoned_time: arrayElement[i + 1]
        }
        arr.push(obj)
    }

    return arr
}

// Retorna um objeto com status gerais
async function queue_stats(driver) {
    const findElementStats = await driver.findElements(By.css("queue-stat"))
    const elements = await findElementStats[0].getText()
    const element = elements.split('\n')
    const arrayElement = element[1].split(' ')

    obj = {
        "waiting": arrayElement[0],
        "serviced": arrayElement[1],
        "abandoned": arrayElement[2],
        "longest_waiting": arrayElement[3],
        "average_waiting_time": arrayElement[4],
        "average_talking_time": arrayElement[5],
    }

    return obj
}

// Retorna um array de objetos com os tecnicos que estão em ligação
async function active_calls(driver) {
    const arr = []

    const elements = await driver.findElements(By.css("active-calls"))
    const element = await elements[0].getText()
    const arrayElement = element.split('\n')

    // Remove valores não necessários (ex: detalhes, fila suporte)
    arrayElement.splice(0, 5)

    // Remove as informações de Chamada externa/External Call
    for (let i = 0; i < arrayElement.length; i++) {
        // Feito essas duas verificações pois ela muda de acordo com o idioma
        if (arrayElement[i].slice(0, 15) == "Chamada externa" || 
            arrayElement[i].slice(0, 13) == "External Call") {
            arrayElement.splice(i, 1)
            i = 0
        }
    }

     // Adiciona as informações no Array
    for (let i = 0; i < arrayElement.length; i += 3) {
        obj = {
            user: arrayElement[i + 1],
            phone: arrayElement[i],
            time_called: arrayElement[i + 2]
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
async function CreateJSON(driver) {
    try {
        data_active_calls = await active_calls(driver)
        data_queue_agents = await queue_agents(driver)
        data_queue_stats = await queue_stats(driver)

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
async function get_data() {
    let driver = await new Builder().forBrowser('firefox').build()

    await driver.get(configs.urlLogin)
    await driver.findElement(By.id('loginInput')).sendKeys(configs.user)
    await driver.findElement(By.id('passwordInput')).sendKeys(configs.password, Key.RETURN)


    await driver.switchTo().newWindow('tab');
    await driver.get(configs.urlWallboard);


    setInterval(() => {
        CreateJSON(driver)
    }, 5000)
}

get_data()
