import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<>
			<Box border={"1px solid gray"} borderRadius={4} padding={5}>
				<VStack spacing={4}>
					<Image src='/logo1.png' h={24} cursor={"pointer"} alt='Instagram' />					
					{!isLogin?(

						// Upper Text

						<>
						<Flex alignItems={"center"} justifyContent={"center"} my={4} gap={4} w={"70%"}>
						<Text 
						whiteSpace="normal"
						overflowWrap="break-word"
						wordBreak="break-word"
						textAlign="center"
						>Sign up to see photos and videos from your friends.</Text>
					</Flex>
						{/*Upper OR  bar and Login with facebook button*/}

						<Button  w={"full"} colorScheme="green" size={"sm"} fontSize={14}>
						<Image src='/facebook.png' w={5} alt="Facebook Image"/>
						Log in with facebook
						</Button>

					<Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
						<Text mx={1} color={"white"}>
							OR
						</Text>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
					</Flex>

						<Input
					placeholder="Mobile Number or Email"
					fontSize={14}
					type="email"
					/>

						<Input
					placeholder="Full Name"
					fontSize={14}
					type="email"
					/>
						<Input
					placeholder="Username"
					fontSize={14}
					type="email"
					/>
						</>
					):<Input
					placeholder="Phone number username or Email "
					fontSize={14}
					type="email"
					/>}
					<Input
					placeholder="Password"
					fontSize={14}
					type="password"
					/>

					{/* Sign up form buttom text.*/}
 			{!isLogin && (
          <>
           	<VStack alignItems={"center"} justifyContent={"center"}>
					 <Text 
			  fontSize={12} color="gray.500" textAlign="center" marginBottom="5px" width="50%">
              People who use our service may have uploaded your contact information to Instagram. 
              <Text as="a" href="#" color="blue.500"> Learn More</Text>
           	 </Text>
           		 <Text
				  fontSize={12} color="gray.500" textAlign="center" marginBottom="10px" width="50%">
              	By signing up, you agree to our <Text as="a" href="#" color="blue.500">Terms</Text>, 
             	 <Text as="a" href="#" color="blue.500">Privacy Policy</Text> and 
              	<Text as="a" href="#" color="blue.500">Cookies Policy</Text>.
           	 </Text>
			</VStack>
         	 </>
       	 )}

					<Button  w={"full"} colorScheme="green" size={"sm"} fontSize={14}>
						{isLogin?"Log in" : "Sign up"}
					</Button>

		 			{/*Lower OR bar*/}

					{isLogin&&
					<>

					<Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
						<Text mx={1} color={"white"}>
							OR
						</Text>
						<Box flex={2} h={"1px"} bg={"gray.400"} />
					</Flex>
					<Flex alignItems={"center"} justifyContent={"center"} my={4} gap={4} w={"full"} cursor={"pointer"}>
						<Image src='/fb.png' w={5} alt="Facebook Image"/>
						<Text>Log in with Facebook</Text>
					</Flex>
					</>
}
				</VStack>
			</Box>

			<Box border={"1px solid gray"} borderRadius={4} padding={5}>
				<Flex alignItems={"center"} justifyContent={"center"}>
					<Box mx={2} fontSize={14}>
						{isLogin ? "Don't have an account?" : "Have an account?"}
					</Box>
					<Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
						{isLogin ? "Sign up" : "Log in"}
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default AuthForm;
