import { Flex, Button, Stack  } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

type SignInformData = {
  email: string;
  password: string
}

const signInFormData = yup.object().shape({
  email: yup.string().required('E-mail obrigatório.').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatório.'),
})

export default function Home() {
  const {register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormData)
  })

  const {errors} = formState
  const handleSignIn: SubmitHandler<SignInformData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
  }
  return (
   <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')} />
          <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')}  />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" isLoanding={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
