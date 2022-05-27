
import { RangeSlider } from "@mantine/core"

const marks = [
    { value: 20, label: '20%' },
    { value: 50, label: '50%' },
    { value: 80, label: '80%' },
];

const Sidebar = () => {
    return (
        <aside>
            <menu>
                <li>
                    <RangeSlider defaultValue={[20, 80]} marks={marks} />
                </li>
            </menu>
        </aside>
    )
}

export default Sidebar