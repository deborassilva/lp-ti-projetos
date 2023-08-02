import Text from "../atoms/Text";
import Title from "../atoms/Title";
import Button from "../atoms/Button";

export default function TitleHero() {
    return(
        <div className="flex flex-col max-w-lg gap-8">
        <Title type='primary'>
        The outsourcing team of your dreams
        </Title>
        <Text>
        We provide full transparency of development process, so you can stay on top of your business needs
        </Text>
        <Button color='blue' type='default' title='Request Access' />

        </div>
    )
}