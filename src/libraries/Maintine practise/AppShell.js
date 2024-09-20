import { AppShell, Burger, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function CollapseDesktop() {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] =
        useDisclosure(true);

    const [opened, { toggle }] = useDisclosure();

    return (
        <div>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: 'md',
                    collapsed: { mobile: !opened },
                }}
                footer={{ height: 30 }}
                padding="md"

            >
                <AppShell.Header>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                    />
                    <div>Logo</div>
                </AppShell.Header>

                <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

                <AppShell.Footer>Main</AppShell.Footer>
            </AppShell>
        </div>
    );
}
