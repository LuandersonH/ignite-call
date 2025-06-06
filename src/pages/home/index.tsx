import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClainUsernameForm } from './components/ClainUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="lg">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClainUsernameForm />
      </Hero>
      <Preview>
        <Image src={previewImage} height={400} quality={100} priority alt="" />
      </Preview>
    </Container>
  )
}
