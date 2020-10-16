import React from 'react';
import { useToast,Button,Box,ChakraProvider} from "@chakra-ui/core"
 

function ToastExample() {
  const toast = useToast()
  //定制的形式
  return (
    <Button
      onClick={() =>
        toast({
          position:"top-right",
          render:()=>(
            <Box m={10} color="white" p={3} bg="blue.500" textAlign="center">
               牛逼了
            </Box>
          ),
        })
      }
    >      展示弹出图

    </Button>
  )
}

        //默认的形式
        // return (
        //   <Button
        //     onClick={() =>
        //       toast({
        //         title: "Account created.",
        //         description: "We've created your account for you.",
        //         status: "success",
        //         duration: 9000,
        //         isClosable: true,
        //       })
        //     }
        //   >
        //     Show Toast
        //   </Button>
        // )


function App() {
  return (
    <ChakraProvider>
      <ToastExample />
    </ChakraProvider>
  )
}

export default App;