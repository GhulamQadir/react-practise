import { IconPhoto, IconDownload, IconArrowRight, IconSun, IconMoonStars } from '@tabler/icons-react';
import { Button, MantineProvider, createTheme, ColorSchemeProvider, ColorScheme, Text, Paper, Loader, Grid, Card, Image, Badge, Group, ActionIcon, useMantineColorScheme } from '@mantine/core';

export default function Theme() {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    return (
        <div className='p-6'>
            <Text>Testing</Text>
            <ActionIcon className='place-items-center'
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
            >
                {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
            </ActionIcon>
            <Card style={{ width: 350 }} shadow="sm" padding="lg" radius="md" withBorder>
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
        </div>
    )
}