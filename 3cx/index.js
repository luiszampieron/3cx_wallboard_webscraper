const { Builder, By, Key, until, element } = require('selenium-webdriver')
const configs = require('./configs')
const fetch = require('cross-fetch')

async function get_data() {
    let driver = await new Builder().forBrowser('firefox').build()

    await driver.get(configs.url)
    await driver.findElement(By.id('loginInput')).sendKeys(configs.user)
    await driver.findElement(By.id('passwordInput')).sendKeys(configs.password, Key.RETURN)


    await driver.switchTo().newWindow('tab');
    await driver.get(configs.urlWallboard);



    async function queue_agents() {
        const arr = []
        const elements = await driver.findElements(By.css("ul"));
        const element = await elements[1].getText()
        const arrayElement = element.split('\n')

        for (let i = 0; i < arrayElement.length; i++) {
            if (arrayElement[i].length == 2 || arrayElement[i].slice(0, 1) == "Q") {
                arrayElement.splice(i, 1)
                i = 0

            }
        }

        for (let i = 0; i < arrayElement.length; i++) {
            if (arrayElement[i].slice(0, 1) == "0") {
                arrayElement.splice(i - 1, 2)
                i = 0
            }
        }

        for (let i = 0; i < arrayElement.length; i += 2) {
            obj = {
                user: arrayElement[i],
                atendidas_abandonadas_tempo: arrayElement[i + 1]
            }
            arr.push(obj)
        }

        return arr
    }

    async function active_calls() {
        const arr = []

        const elements = await driver.findElements(By.css("active-calls"))
        const element = await elements[0].getText()
        const arrayElement = element.split('\n')

        function validation(array, indice) {
            if (array[indice] == "Caller" ||
                array[indice] == "Callee" ||
                array[indice] == "Time" ||
                array[indice] == "Details" ||
                array[indice] == "External Call" ||
                array[indice] == "External Call, Waiting in Queue" ||
                array[indice] == "External Call, Connected to Queue" ||
                array[indice].slice(0, 1) == ":" ||
                array[indice].slice(0, 1) == "[") {
                return true
            } else {
                return false
            }
        }


        for (let i = 0; i < arrayElement.length; i++) {
            if (validation(arrayElement, i)) {
                arrayElement.splice(i, 1)
                i = 0
            }
        }

        for (let i = 1; i < arrayElement.length; i += 2) {
            obj = {
                user: arrayElement[i],
                time_called: arrayElement[i + 1]
            }
            arr.push(obj)
        }

        return arr
    }
    
    setInterval(() => {
        async function CreateJSON() {
            data_active_calls = await active_calls()
            data_queue_agents = await queue_agents()

            data = {
                "active_calls": data_active_calls,
                "queue_agents": data_queue_agents
            }

            const connectionApi = await fetch('http://localhost:4000/api', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
        console.log(JSON.stringify(data))
        }
        CreateJSON()
    }, 5000)

}

get_data()
