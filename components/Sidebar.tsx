
import { RangeSlider, Text, List, ScrollArea } from '@mantine/core';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';


const marks = [
    { value: 0, label: '0' },
    { value: 50000, label: '50k' },
    { value: 100000, label: '100k' },
    { value: 150000, label: '150k' },
    { value: 200000, label: '200k' },
];

const Aside = styled.aside`
    height: calc(100% - 70px - 1rem);
    position: fixed;
    z-index: 2;
    left: .5rem;
    max-width: 280px;
    width: 100%;

`;

const brandNames = (): JSX.Element[] => {
    let brands = []

    for (let i = 0; i <= 40; i++) {
        const item = <List.Item>
            <Text
                weight={500}
                size='md'
                component={Link}
                href={`/smartphones/samsung`}
            >
                Samsung
            </Text>
        </List.Item>

        brands.push(item)
    }

    return brands;
}

const Sidebar = () => {
    const [value, setValue] = useState<[number, number]>([0, 200000]);;
    const [rangeValue, setRangeValue] = useState<[number, number]>([0, 200000]);
    return (
        <Aside className='bg-glass rounded-xl py-4 pl-3 pr-2'>
            <ScrollArea style={{ height: '100%', overflowX: 'hidden' }} offsetScrollbars scrollbarSize={5}>
                <menu className='pl-2 pr-4'>
                    <List spacing={32}>
                        <List.Item>
                            <Text weight={500} size='lg' className="mb-8">Price Range</Text>
                            <RangeSlider
                                value={value}
                                onChange={setValue}
                                onChangeEnd={setRangeValue}
                                min={0}
                                max={200000}
                                step={5000}
                                marks={marks}
                                labelAlwaysOn
                            />
                        </List.Item>

                        <List.Item>
                            <Text weight={500} size='lg' py={8}>Brands</Text>
                            <List spacing={10} pl={16}>
                                {brandNames()}
                            </List>
                        </List.Item>
                    </List>
                </menu>
            </ScrollArea>
        </Aside>
    )
}

export default Sidebar