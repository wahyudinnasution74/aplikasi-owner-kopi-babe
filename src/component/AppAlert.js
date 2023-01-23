import React from "react";
import {
  Alert,
  CloseIcon,
  Collapse,
  HStack,
  IconButton,
  Text,
  VStack,
} from "native-base";

export default function AppAlert({ status, title, show, onClose }) {
  return (
    <Collapse isOpen={show}>
      <Alert w="100%" status={status}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text fontSize="md" color="coolGray.800">
                {title}
              </Text>
            </HStack>
            <IconButton
              onPress={onClose}
              variant="unstyled"
              _focus={{
                borderWidth: 0,
              }}
              icon={<CloseIcon size="3" />}
              _icon={{
                color: "coolGray.600",
              }}
            />
          </HStack>
        </VStack>
      </Alert>
    </Collapse>
  );
}
