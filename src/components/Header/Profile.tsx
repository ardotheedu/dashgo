import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Eduardo de Sá</Text>
                <Text color="gray.300" fontSize="small">
                    eduardosalimaa@hotmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Eduardo de Sá" src="https://github.com/ardotheedu.png" />
        </Flex>
    )
}