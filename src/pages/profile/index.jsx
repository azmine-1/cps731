import {
    Box,
    Button,
    Grid,
    HStack,
    Heading,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Divider,
    Tag,
    TagCloseButton,
    Text,
    VStack,
    useDisclosure,
    Flex,
    CardFooter,
    Card,
    CardHeader,
    Spinner,
  } from "@chakra-ui/react";
  import { SearchIcon } from "@chakra-ui/icons";
  import React, { useEffect, useState } from "react";
  import { getAllRecipes } from "../redux/authReducer/actions";
  import { useSelector } from "react-redux";
  import axios from "axios";
  import FeedCard from "../components/Feed/FeedCard";
  import { BiLike, BiShare } from "react-icons/bi";
  import styled from "@emotion/styled";
  import { useNavigate } from "react-router-dom";
  import { Carousel } from "../components/Feed/SingleRecipeCarousel";
  
  export const Explore = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [filter, setFilter] = useState(false);
    const [impression, setImpression] = useState(null);
    const [searchString, setSearchString] = useState(""); // New state for search input
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const token =
      useSelector((store) => store.authReducer.token) ||
      localStorage.getItem("token");
  
    const handleImpressionChange = (event) => {
      setImpression(event.target.value);
    };
  
    const handleFilter = () => {
      setFilter(!filter);
      onClose();
    };
  
    const handleSearchChange = (e) => {
      setSearchString(e.target.value);
    };
  
    const handleSearch = () => {
      setFilter(!filter); // Trigger filter logic
    };
  
    const handleCuisineChange = (e) => {
      const data = e.target.value;
      const newCuisines = [...selectedCuisines];
      if (newCuisines.includes(data)) {
        const index = newCuisines.indexOf(data);
        newCuisines.splice(index, 1);
      } else {
        newCuisines.push(data);
      }
      setSelectedCuisines(newCuisines);
    };
  
    const handleCuisineRemove = (cuisine) => {
      const updatedCuisines = selectedCuisines.filter((item) => item !== cuisine);
      setSelectedCuisines(updatedCuisines);
    };
  
    useEffect(() => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      axios
        .get(`${process.env.REACT_APP_API_URL}/recipe/getAllRecipe`, {
          params: {
            impression: impression,
            veg: selectedOption,
          },
          headers: config.headers,
        })
        .then((res) => {
          let filteredRecipes = res.data;
  
          // Filter recipes by selected cuisines
          if (selectedCuisines.length > 0) {
            filteredRecipes = filteredRecipes.filter((recipe) =>
              selectedCuisines.some((selectedCuisine) =>
                recipe.cuisine.includes(selectedCuisine)
              )
            );
          }
  
          // Filter recipes by search string
          if (searchString.trim()) {
            filteredRecipes = filteredRecipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(searchString.toLowerCase())
            );
          }
  
          setRecipe(filteredRecipes);
          setSelectedOption(null);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [filter]);
  
    console.log(recipe, "recipe");
  
    const cuisines = [
      "Mexican",
      "Italian",
      "Chinese",
      "Indian",
      "German",
      "Greek",
      "Filipino",
      "Japanese",
    ];
  
    return (
      <>
        <Box>
          <Box h="45vh" position="relative">
            <Image
              src="https://images.unsplash.com/photo-1495546968767-f0573cca821e?auto=format&fit=crop&q=80&w=2831&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hero image"
              w="100%"
              h="100%"
              objectFit="cover"
            />
            <VStack
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              alignItems="center"
              justifyContent="space-around"
              paddingX="7"
            >
              <Heading
                as="h3"
                size="2xl"
                color="white"
                textShadow="1px 1px 2px black"
                textAlign={"center"}
              >
                Find the best recipes in a few steps!
              </Heading>
  
              <Button onClick={handleSearch}>Search now</Button>
            </VStack>
          </Box>
          <Box boxShadow="0 4px 10px #0002" padding="4">
            <HStack spacing={5} width="min(80rem,100%)" mx="auto">
              <InputGroup width="30%">
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="text" />
                </InputLeftElement>
                <Input
                  placeholder="Search for a recipe"
                  border="1px solid"
                  outline="none"
                  borderColor="text"
                  _focus={{ borderColor: "primary.500" }}
                  value={searchString}
                  onChange={handleSearchChange} // Update search string
                />
              </InputGroup>
              <Heading as="h5" size="md" color="text">
                Advanced Search
              </Heading>
              <svg
                onClick={onOpen}
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                cursor="pointer"
              >
                <path
                  fill="#F58332"
                  d="M9 5a1 1 0 1 0 0 2a1 1 0 0 0 0-2zM6.17 5a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 0 1 0-2h1.17zM15 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h7.17zM9 17a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2.83 0a3.001 3.001 0 0 1 5.66 0H19a1 1 0 1 1 0 2h-7.17a3.001 3.001 0 0 1-5.66 0H5a1 1 0 1 1 0-2h1.17z"
                />
              </svg>
            </HStack>
          </Box>
          <DIV>
            {recipe.length === 0 ? (
              <Spinner
                mx="auto"
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="primary.500"
                size="xl"
              />
            ) : (
              recipe.map((ele, index) => (
                <Card key={index} textAlign="left" boxShadow="lg" borderRadius="1rem">
                  <Box borderWidth="0" borderRadius="md" overflow="hidden">
                    <CardHeader>
                      <Carousel height="300px" images={ele.images} />
                    </CardHeader>
                    <Box p="1rem">
                      <Heading fontSize="lg" fontWeight="700">
                        {ele.title}
                      </Heading>
                      <Text fontSize="sm">{ele.description}</Text>
                      <Button
                        variant="outline"
                        onClick={() => navigate(`/recipe/${ele._id}`)}
                      >
                        Details
                      </Button>
                    </Box>
                  </Box>
                </Card>
              ))
            )}
          </DIV>
        </Box>
      </>
    );
  };
  
  
  const DIV = styled.div`
    text-align: center;
    min-height: 20vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: min(80rem, 100%);
    margin-inline: auto;
    padding-block: 5rem;
    @media (max-width: 768px) {
      grid-template-columns: repeat(
        1,
        1fr
      ); /* 1 column on screens up to 768px wide */
    }
  
    @media (min-width: 769px) and (max-width: 1024px) {
      grid-template-columns: repeat(
        2,
        1fr
      ); /* 2 columns on screens between 769px and 1024px wide */
    }
  
    @media (min-width: 1025px) {
      grid-template-columns: repeat(
        3,
        1fr
      ); /* 3 columns on screens wider than 1024px */
    }
  `;