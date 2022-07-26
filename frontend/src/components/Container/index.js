import ActiveCalls from "../ActiveCalls";
import ActiveCallsTitle from "../ActiveCallsTitle";
import QueueAgents from "../QueueAgents";
import QueueAgentsTitle from "../QueueAgentsTitle";
import QueueStats from "../QueueStats";
import Subs from "../Subs";
import { Con, ConQS, Container, Inner, TitleCon } from "./styled";

const ContainerGeral = ({ dataDash }) => {
  function mergeData(dataDash) {
    const datadashh = dataDash.queue_agents.map((item) => {
      const nota = dataDash.technicians_average.find((average) => {
        const user = average.nomeTecnico.split(" ");

        return user[user.length - 1] === `[${item.ramal}]`;
      });

      if (nota) {
        item.average = nota.mediaTecnico;
      }

      return item;
    });

    return datadashh;
  }

  function ActiveCallsOn() {
    return (
      <Con>
        <TitleCon>FILA DE ATENDIMENTO</TitleCon>
        <ActiveCallsTitle />
        <Inner>
          {dataDash.active_calls.map((item, key) => (
            <ActiveCalls
              user={item.user}
              time_called={item.time_called}
              phone={item.phone}
              key={key}
            />
          ))}
        </Inner>
      </Con>
    );
  }

  function QueueAgentsOn() {
    mergeData(dataDash);

    return (
      <Con>
        <TitleCon>HISTÓRICO DE ATENDIMENTO</TitleCon>
        <QueueAgentsTitle />
        <Inner size="47">
          {dataDash.queue_agents.map((item, key) => (
            <>
              {item.status !== "Deslogado" && item.answered > 0 && (
                <QueueAgents
                  user={item.user}
                  abandoned={item.abandoned}
                  answered={item.answered}
                  status={item.status}
                  logged={item.logged}
                  average={item.average}
                  key={key}
                />
              )}
            </>
          ))}
        </Inner>

        <Subs />
      </Con>
    );
  }

  return (
    <Container>
      <ConQS>
        <QueueStats
          waiting={dataDash.queue_stats.waiting}
          serviced={dataDash.queue_stats.serviced}
          abandoned={dataDash.queue_stats.abandoned}
          average_waiting_time={dataDash.queue_stats.average_waiting_time}
          average_talking_time={dataDash.queue_stats.average_talking_time}
          ligacaoesAvaliadas={dataDash.overall_average.ligacaoesAvaliadas}
          notaGeral={dataDash.overall_average.notaGeral}
        />
      </ConQS>

      <ActiveCallsOn />

      <QueueAgentsOn />
    </Container>
  );
};

export default ContainerGeral;
