import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, HStack, Image, Input, Text, VStack } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';




const RegisterUI = () => {

    const {handleSubmit,register,formState:{errors},watch}= useForm();
    const onSubmit = (data, e) => console.log(data);
    const Password = watch("password");
    // console.log(Password);

    return (
        <Box h={"100vh"} w={"100vw"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <HStack w={"100vw"} justifyContent={"space-between"}>
                <Box>
                    <VStack w={"50vw"} h={"70vh"} justifyContent={"center"} alignItems={"center"} gap={3}>
                        <Text fontSize={"5xl"}>Register</Text>
                        <form onSubmit={handleSubmit(onSubmit)} width={"40vw"}>

                            <FormControl isInvalid={errors.name} width={"30vw"}>
                                <FormLabel as="name" />
                                <Input id ="name" type="name" placeholder='Enter your name'
                                    {...register("name",{
                                        required:'Name is required',
                                    })}/>
                                <FormErrorMessage>
                                    {errors.name && errors.name.message}
                                </FormErrorMessage>
                                    
                            </FormControl>
                            
                            <FormControl isInvalid={errors.email} width={"30vw"}>
                                <FormLabel as="email" />
                                <Input id ="email" type="email" placeholder='Enter your email'
                                    {...register("email",{
                                        required:'Email is required',
                                        pattern:{
                                            value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                            message:"Invalid email address"
                                        }
                                    })}/>
                                <FormErrorMessage>
                                    {errors.email && errors.email.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl isInvalid={errors.password} width={"30vw"}>
                                <FormLabel as="password" />
                                <Input id ="password" type="password" placeholder='Enter your password'
                                    {...register("password",{
                                        required:'Password is required',
                                    })}/>
                                <FormErrorMessage>
                                    {errors.password && errors.password.message}
                                </FormErrorMessage>

                            </FormControl>
                            <FormControl isInvalid={errors.password} width={"30vw"}>
                                <FormLabel as="confirm_password" />
                                <Input id ="confirm_password" type="password" placeholder='Confirm your password'
                                    {...register("confirmPassword",{
                                        required:'Confirm Password is required',
                                        validate : value => console.log(value),
                                    })} />    
                                <FormErrorMessage>
                                    {errors.confirmPassword && errors.confirmPassword.message}
                                </FormErrorMessage>
                            </FormControl>
                            <HStack w={"30vw"} justifyContent={"space-between"} mt={3}>
                                <Checkbox>Accept terms and Conditions</Checkbox>
                                <Button type="submit" colorScheme={"green"} >Register</Button>
                            </HStack>

                        </form>
                        
                        <HStack w={"30vw"} justifyContent={"space-between"} alignItems="center">
                            <Box borderBottom={"1px solid black"} w={"13vw"}></Box>
                            <Text fontSize={"2xl"}>Or</Text>
                            <Box borderBottom={"1px solid black"} w={"13vw"}></Box>
                        </HStack>
                        <VStack>
                            <Link to="/Register"><Button colorScheme={'facebook'} w={"30vw"} variant={"ghost"}>Register</Button></Link>
                            <Button colorScheme={'red'} w={"30vw"} >Register with Google</Button>
                            <Button colorScheme={'facebook'} w={"30vw"}>Register with Facebook</Button>
                        </VStack>
                    </VStack>
                        
                </Box>
                <Box>
                    <Image src="https://images.unsplash.com/photo-1670979313223-59d7225b3c1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" w={"30vw"} h={"100vh"} backgroundSize={'cover'} backgroundRepeat={"no-repeat"} backgroundPosition={"center"}/>
                </Box>
            </HStack>
        </Box>
    );
};

export default RegisterUI ;

