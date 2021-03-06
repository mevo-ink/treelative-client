import { gql } from '@urql/svelte'

export const LOGIN = gql`
  mutation LOGIN ($input: LoginInput!) {
    login (input: $input)
  }
`

export const LOGIN_WITH_PROVIDER = gql`
  mutation LOGIN_WITH_PROVIDER ($email: String! $token: String!) {
    login: loginWithProvider (email: $email token: $token)
  }
`
