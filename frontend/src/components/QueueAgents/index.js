import { Section, Stats, Title, Data, Nota } from "./styled"

export default ({user, answered, abandoned, status, average}) => {
    const arrElement = user.split(' ')
    arrElement.shift()
    const userNoRamal = arrElement.join(' ')


    return (
        <Section >
            <Stats status={status}/>
            <Title>{userNoRamal.toUpperCase()}</Title>
            <Data>{answered}</Data>
            <Data>{abandoned}</Data>
            <Nota>{average}</Nota>
        </Section>
    )
}