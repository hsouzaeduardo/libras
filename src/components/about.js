import React from 'react'
import handImages from '../images/handImages.svg';
import {
    Text,
    Button,
    Image,
    Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
Link,
} from '@chakra-ui/react'

export default function About() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <div>
            {/* <Button onClick={onOpen} colorScheme="orange">Saiba Mais</Button> */}
            
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Linguagem de sinais americana (ASL)</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Text fontSize="sm">A linguagem de sinais americana (ASL) é uma linguagem visual que funciona como a linguagem de sinais predominante nas comunidades de surdos nos Estados Unidos e na maior parte do Canadá.<br></br>
              Aqui está a lista de gestos ASL com as mãos para o alfabeto.</Text>
          <Image src={handImages}/>
          <Text fontSize="sm">Esta ilustração em linguagem de sinais é criada por <Link href="https://avanade.com.br" isExternal color="orange.300">Avanade Hack</Link></Text>
            
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Fechar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
    )
}
