import { Box, styled } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  // 1fr - flexivel | auto: botão baseado no conteudo
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',

  '@media(max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
})
