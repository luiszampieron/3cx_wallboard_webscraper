import { Title, Time, Section, Phone } from "./styled"

export default ({user, time_called, phone}) => {
    const arrElement = user.split('[')
    const userNoRamal = arrElement[0]

    return (
        <Section>
            <Title>{userNoRamal.toUpperCase()}</Title>
            <Time>{time_called}</Time>
            <Phone>{phone}</Phone>
        </Section>
    )
}