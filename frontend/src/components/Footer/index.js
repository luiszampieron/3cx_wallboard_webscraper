import moment from "moment";
import React, { useEffect, useState } from "react";
import logo from "../../img/LogoDigisatBranco.png";
import { AusentesCards, Card, FooterDiv, FristCard, Img } from "./styled";

const zeroPad = (num, places) => String(num).padStart(places, "0");

function Footer({ dataDash }) {
  const [ausentes, setAusentes] = useState([]);

  useEffect(() => {
    const items = dataDash.queue_agents.map((item) => {
      if (item.offline_time) {
        return item;
      }

      return undefined;
    });

    setAusentes(items.filter((item) => !!item));
  }, [dataDash]);

  const Diferenca = (antes) => {
    const diff = moment().diff(moment(antes));

    const horas = zeroPad(moment.duration(diff).hours(), 2);
    const minutos = zeroPad(moment.duration(diff).minutes(), 2);
    const segundos = zeroPad(moment.duration(diff).seconds(), 2);

    let overtime = false;
    if (minutos >= 10 || horas >= 1) {
      overtime = true;
    }

    const tempo = `${horas}:${minutos}:${segundos}`;

    return (
      <span style={{ marginTop: 5, color: overtime ? "red" : "#FFFFFF" }}>
        {tempo}
      </span>
    );
  };

  return (
    <div>
      <FooterDiv>
        <FristCard>
          <span style={{ fontSize: 20, color: "#FFFFFF" }}>AUSENTES:</span>
          <span style={{ fontSize: 30, color: "#FFFFFF", marginTop: 5 }}>
            {
              ausentes.filter(
                (item) => item.status !== "Deslogado" && item.answered > 0
              ).length
            }
          </span>
        </FristCard>
        <AusentesCards>
          {ausentes.map((item, key) => (
            <>
              {item.status !== "Deslogado" && item.answered > 0 && (
                <Card key={key}>
                  <span>{item?.user}</span>
                  {Diferenca(item.offline_time)}
                </Card>
              )}
            </>
          ))}
        </AusentesCards>

        <Img src={logo} />
      </FooterDiv>
    </div>
  );
}

export default React.memo(Footer);
