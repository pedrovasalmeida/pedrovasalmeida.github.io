import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pedro Vasconcellos</Text>
          <Text color="gray.300" fontSize="small">
            pedrovasalmeida@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Pedro Vasconcellos"
        src="https://github.com/pedrovasalmeida.png"
      />
    </Flex>
  );
}
