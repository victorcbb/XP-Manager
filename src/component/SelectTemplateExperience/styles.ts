import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Container = styled.form``

export const Root = styled(RadioGroup.Root)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin: 0.75rem 0 1.5rem 0.25rem;

  div {
    height: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const Item = styled(RadioGroup.Item)`
  background-color: ${({ theme }) => theme.white};
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  box-shadow: 0 2px 5px ${({ theme }) => theme['gray-900']};

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme['blue-700']};
  }
`

export const Indicator = styled(RadioGroup.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme['blue-700']};
  }
`
