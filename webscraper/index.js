const puppeteer = require("puppeteer");
const fetch = require("cross-fetch");
const configs = require("../configs");

// Retorna um objeto com status gerais
async function queue_stats(page) {
  const data = await page.evaluate(() => {
    const selector = document.querySelectorAll("queue-stat td");
    const list = [...selector];
    const arrayList = list.map((item) => {
      return item.outerText;
    });
    return arrayList;
  });

  data.splice(0, 6);

  obj = {
    waiting: data[0],
    serviced: data[1],
    abandoned: data[2],
    longest_waiting: data[3],
    average_waiting_time: data[4],
    average_talking_time: data[5],
  };

  return obj;
}

// Retorna um array de objetos que mostram a quantidade de ligação de todos os técnicos
async function queue_agents(page) {
  const arr = [];

  const getName = await page.evaluate(() => {
    const selector = document.querySelectorAll("queue-agents li");
    const list = [...selector].map((item) => {
      return item.outerText;
    });

    const arrayList = list
      .map((item) => {
        const arrayItem = item.split("\n").filter((item) => !!item);

        if (arrayItem[0].length === 2) arrayItem.splice(0, 1);

        const nameDivider = arrayItem[0].split(" ");

        if (nameDivider[nameDivider.length - 1].toUpperCase() === "SUPORTE") {
          nameDivider.pop();
          arrayItem[0] = nameDivider.join(" ");
        }

        return arrayItem;
      })
      .filter((item) => item[0].slice(0, 9) != "Deslogado");

    return arrayList;
  });

  const isOnline = await page.evaluate(() => {
    const selector = document.querySelectorAll("queue-agents li wcavatar i");
    const list = [...selector];
    const arrayList = list
      .map((item) => {
        return item.className;
      })
      .map((item) => item.split(" "))
      .map((item) => {
        if (item.indexOf("away") > -1) {
          return "Ausente";
        } else if (item.indexOf("off") > -1) {
          return "Deslogado";
        } else if (item.indexOf("available") > -1) {
          return "Disponível";
        } else if (item.indexOf("busy") > -1) {
          return "Atendimento";
        } else {
          return "Ocupado";
        }
      });
    return arrayList;
  });

  const sortedName = getName.sort(function (a, b) {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  });

  for (let i = 3; i < sortedName.length; i++) {
    const obj = {
      user: sortedName[i][0],
      ramal: sortedName[i][1],
      status: isOnline[i],
      logged: true,
      answered: sortedName[i][3],
      abandoned: sortedName[i][4],
      talk_time: sortedName[i][5],
    };

    arr.push(obj);
  }

  /* 
    user: getData[i],
    status: getData[i + 1],
    logged: getData[i + 2],
    answered: getData[i + 3],
    abandoned: getData[i + 4],
    talk_time: getData[i + 5],
  */

  return arr;
}

// Retorna um array de objetos com os tecnicos que estão em ligação
async function active_calls(page) {
  const arr = [];

  const getData = await page.evaluate(() => {
    const selector = document.querySelectorAll("active-calls");

    const children = selector[0].children[0].children[1].children;

    const list = [...children].map((item) => item.innerText);

    list.pop();
    list.shift();

    const arrayList = list.map((item) => {
      const arrayItem = item.split("\n");

      const obj = {
        phone: arrayItem[0],
        user: arrayItem[1],
        time_called: arrayItem[2],
      };

      return obj;
    });

    return arrayList;
  });

  if (getData.length) {
    arr.push(...getData);
  }

  return arr;
}

// Faz o post na api
async function connectionApi(data) {
  try {
    await fetch(configs.ipMachine + "4000/api/EnviarDadosGerais", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.error(e);
    console.log("Erro, verifique a conexão com a api");
  }
}

// Cria o JSON que será feito o post e já chama a conexão com a api
async function CreateJSON(page) {
  try {
    data_active_calls = await active_calls(page);
    data_queue_agents = await queue_agents(page);
    data_queue_stats = await queue_stats(page);

    data = {
      active_calls: data_active_calls,
      queue_agents: data_queue_agents,
      queue_stats: data_queue_stats,
    };

    connectionApi(data);
  } catch (e) {
    console.error(e.message);
    console.log("Erro, verifique se o firefox não sofreu alguma alteração");
  }
}

// Function main... Abre o navegador e chama as demais funções
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // - Acessa página de login
  await page.goto(configs.urlLogin);

  // - Loga na página
  await page.type("#loginInput", configs.user);
  await page.type("#passwordInput", configs.password);
  await page.click("#submitBtn");

  // - Acessa página de wallboard
  await page.waitForTimeout(3000);
  await page.goto(configs.urlWallboard);

  await page.waitForTimeout(3000);

  setInterval(() => {
    CreateJSON(page);
  }, 5000);
})();
