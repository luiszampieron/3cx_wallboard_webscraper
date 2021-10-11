import { Section, Title, Serviced } from "./styled"

export default ({user, serviced_abandoned_time}) => {
    return (
        <Section>
            <Title>{user}</Title>
            <Serviced>{serviced_abandoned_time}</Serviced>
        </Section>
    )
}