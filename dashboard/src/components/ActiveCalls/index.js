import { Title, Time, Section, Phone } from "./styled"

export default ({user, time_called, phone}) => {
    return (
        <Section>
            <Title>{user}</Title>
            <Time>{time_called}</Time>
            <Phone>{phone}</Phone>
        </Section>
    )
}