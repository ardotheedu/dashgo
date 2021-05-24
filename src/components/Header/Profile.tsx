import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Eduardo de Sá</Text>
                    <Text color="gray.300" fontSize="small">
                        eduardosalimaa@hotmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Eduardo de Sá" src="https://github.com/ardotheedu.png" />
        </Flex>
    )
}