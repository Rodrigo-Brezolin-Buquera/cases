import {
    Text, Image, CardFooter,
    Button, Card, Stack, CardBody
} from "@chakra-ui/react";
import Triangle from "../../../../../assets/Triangle.png"

export const InformationCard = (props) => {
    return (
        <Card maxW='sm' h={"430px"} backgroundColor={"brand.400"} m={"1em"} mb={"4em"}>
            <Image
                src={props.image}
                alt='Card image'
                borderRadius='lg'
            />

            <CardBody position={"relative"}>
                <Image
                    src={Triangle}
                    alt='Card image'
                    w={"50px"}
                    position={"absolute"}
                    right={"5%"}
                    top={["-15%", "-15%", "-16%", "-17%", "-20%"]}

                />
                <Button
                    borderColor={"grey.100"}
                    border={"1px"}
                    backgroundColor={"brand.400"}
                    borderRadius={"18px"}
                >
                    <Text color={"grey"} fontSize={"smaller"} fontFamily={"secondary"} >function</Text>
                </Button>
                <Stack mt='6' spacing='3'>
                    <Text h={"30px"} fontFamily={"primary"}>
                        {props.text}
                    </Text>

                </Stack>
            </CardBody>

            <CardFooter>

                <Button variant='ghost' >
                    <Text color={"brand.200"} fontFamily={"secondary"}>Read more</Text>
                </Button>
            </CardFooter>
        </Card>
    )
}


