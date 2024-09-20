import { Button, MantineProvider, createTheme, Text, Paper, Loader, Grid, Card, Image, Badge, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';
import '@mantine/core/styles.css';

function Demo() {
    const [opened, { toggle }] = useDisclosure();
    const theme = createTheme({
        /** Your theme override here */
    });


    return (
        <MantineProvider theme={{ fontFamily: "Georgia", fontSizes: { md: 40 } }} defaultColorScheme='light' >
            <Paper shadow="xs" p="xl">
                <Text>This is dummy text</Text>
            </Paper>  <Button
                variant="light"
                leftSection={<IconPhoto size={14} />}
                rightSection={<IconArrowRight size={14} />}
            >
                Visit gallery
            </Button>
            <Loader type='dots' color='white' />


            <Grid align="stretch" overflow='hidden' justify="space-around">
                <Grid.Col style={{ maxWidth: "350px" }} span={{ base: 12, md: 6, lg: 3 }}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                height={160}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink">On Sale</Badge>
                        </Group>

                        <Text size="sm" c="dimmed">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        <Button color="blue" fullWidth mt="md" radius="md">
                            Book classic tour now
                        </Button>
                    </Card>
                </Grid.Col>
                <Grid.Col style={{ maxWidth: "350px" }} span={{ base: 12, md: 6, lg: 3 }}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                height={160}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink">On Sale</Badge>
                        </Group>

                        <Text size="sm" c="dimmed">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        <Button color="blue" fullWidth mt="md" radius="md">
                            Book classic tour now
                        </Button>
                    </Card>
                </Grid.Col>
                <Grid.Col style={{ maxWidth: "350px" }} span={{ base: 12, md: 6, lg: 3 }}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                height={160}
                                alt="Norway"
                            />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Norway Fjord Adventures</Text>
                            <Badge color="pink">On Sale</Badge>
                        </Group>

                        <Text size="sm" c="dimmed">
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>

                        <Button color="blue" fullWidth mt="md" radius="md">
                            Book classic tour now
                        </Button>
                    </Card>
                </Grid.Col>
                <Grid.Col style={{ maxWidth: "350px" }} span={{ base: 12, md: 6, lg: 3 }}>
            
                </Grid.Col>
            </Grid>
        </MantineProvider>
    );
}
export default Demo;