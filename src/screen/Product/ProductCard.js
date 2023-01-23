import {
  AlertDialog,
  Box,
  Button,
  Hidden,
  HStack,
  Input,
  Modal,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { deleteProducts, editProduct } from "./api";

export default function ProductCard({ item, fetchProducts, navigation }) {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalTakeOut, setShowModalTakeOut] = useState(false);
  const [takeOutError, seTakeOutError] = useState(false);
  const [takeOutNumber, setTakeOutNumber] = useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    closeAllModal();
  }, []);

  const closeAllModal = () => {
    setShow(false);
    setShowModal(false);
    setShowModalTakeOut(false);
    setIsOpen(false);
  };

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);

  const handleChangeTakeOut = (value, quantity) => {
    const number = quantity - value;
    if (number < 0) {
      seTakeOutError(true);
      setTakeOutNumber(0);
      return;
    }
    seTakeOutError(false);
    setTakeOutNumber(value);
  };

  const submitTakeOut = async (id, quantity) => {
    const resp = await editProduct(id, { quantity: quantity - takeOutNumber });
    setTakeOutNumber(0);
    fetchProducts();
    closeAllModal();
  };

  const onDelete = async (id) => {
    await deleteProducts(id);
    fetchProducts();
    closeAllModal();
  };
  return (
    <Box py="3" px={"3"} mx={3} my={3} shadow={3} bg={"white"} rounded="lg">
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Hapus Produk</AlertDialog.Header>
          <AlertDialog.Body>
            Data yang sudah dihapus tidak bisa dikembalikan.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Batal
              </Button>
              <Button colorScheme="danger" onPress={() => onDelete(item._id)}>
                Hapus
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Aksi</Modal.Header>
          <Modal.Body>
            <HStack justifyContent={"center"} space="2">
              <Button onPress={() => setShowModalTakeOut(true)}>
                Ambil Barang
              </Button>
              <Button
                colorScheme={"orange"}
                onPress={() => {
                  setShowModal(false);
                  navigation.navigate("EditProduct", { product: item });
                }}
              >
                Edit
              </Button>
              <Button colorScheme={"red"} onPress={() => setIsOpen(!isOpen)}>
                Hapus
              </Button>
            </HStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <Modal
        isOpen={showModalTakeOut}
        onClose={() => setShowModalTakeOut(false)}
      >
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>
            Berapa jumlah barang yang anda ambil dari gudang?
          </Modal.Header>
          <Modal.Body>
            <Box alignItems="center">
              <Input
                w="100%"
                py="0"
                onChangeText={(e) => handleChangeTakeOut(e, item.quantity)}
                InputRightElement={
                  <Box size="xs" rounded="none" w="1/6" h="full">
                    {item.unit}
                  </Box>
                }
                placeholder="Jumlah barang yang diambil"
              />
            </Box>
            <Text>Sisa barang di gudang: {item.quantity - takeOutNumber}</Text>
            <Hidden only={takeOutError}>
              <Text style={{ color: "red" }}>
                Tidak bisa mengambil barang lebih dari jumlah stok
              </Text>
            </Hidden>
          </Modal.Body>
          <Button
            onPress={() => submitTakeOut(item._id, item.quantity)}
            isDisabled={takeOutError}
          >
            Submit
          </Button>
        </Modal.Content>
      </Modal>
      <HStack justifyContent="space-between">
        <VStack>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            color="tomato"
            bold
            fontSize={"lg"}
          >
            {item.name}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {item.quantity} {item.unit}
          </Text>
          <Hidden only={show}>
            <VStack mt={3}>
              <Text color="tomato">Supplier:</Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                {item.supplier.name}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                {item.supplier.address}
              </Text>
            </VStack>
          </Hidden>
        </VStack>
        <Spacer />
        <HStack>
          <Button
            variant={"ghost"}
            rounded="full"
            onPress={() => setShow(!show)}
          >
            <Ionicons
              name={!show ? "arrow-down-circle-outline" : "arrow-up-circle"}
              size={20}
              color="tomato"
            />
          </Button>
          <Button
            variant={"ghost"}
            rounded="full"
            onPress={() => setShowModal(true)}
          >
            <Ionicons
              name="ellipsis-vertical-outline"
              size={20}
              color="tomato"
            />
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}
