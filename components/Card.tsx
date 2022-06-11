import { Text } from "@mantine/core"
import Image from "next/image"

const Card = () => {
    return (
        <div className="card rounded-md px-4 py-6 bg-glass">
            <div className="card-header">
                <Image
                    src={'/assets/images/bg/img4.jpg'}
                    height={200}
                    width={200}
                    className='object-contain'
                />
                <Text size='md' color='cyan'>
                    Name of product
                </Text>
            </div>
        </div>
    )
}

export default Card