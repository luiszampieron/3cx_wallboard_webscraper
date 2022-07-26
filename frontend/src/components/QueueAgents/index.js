import React from "react";
import { Section, Stats, Title, Data, Nota } from "./styled";

const QueueAgents = ({ user, answered, abandoned, status, average }) => {
  return (
    <Section>
      <Stats status={status} />
      <Title>{user.toUpperCase()}</Title>
      <Data>{answered}</Data>
      <Data>{abandoned}</Data>
      <Nota>{average}</Nota>
    </Section>
  );
};

export default React.memo(QueueAgents);
