import { VStack, useColorModeValue, Box, Button, Heading, Container, Input, useToast } from '@chakra-ui/react'
import { useProductStore } from '../store/product'



import React from 'react'
import {useState} from 'react'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: ''
  })
  const toast = useToast();
	const { createProduct } = useProductStore();
  const handleAddProduct = async() => {
    const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
		setNewProduct({ name: "", price: "", image: "" });
	}


  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"xl"}  mb={8} textAlign={"center"} marginStart={8} >
          Create a new product</Heading>

       <Box w={"full"} rounded={"lg"} shadow={"md"} p={8} boxShadow={"lg"}  
        bg={useColorModeValue("white","gray.900")}
       >
        <VStack spacing={4}>
          <Input type="text" placeholder="Product name" 
          name="name" value={newProduct.name}
          onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
          />
          <Input  placeholder="Price" 
          name="price"
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
          />
          <Input type="text" placeholder="Image" 
          name="image" 
          value={newProduct.image}
          onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
          />
          <Button  colorScheme="blue" onClick={handleAddProduct} w='full'>
          
            Add Product</Button>
        </VStack>
          
       
       </Box>
          
        

      </VStack>

    </Container>
  )
}

export default CreatePage