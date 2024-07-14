import {Button, Switch, Textarea, Image} from "@nextui-org/react";
import {useState} from "react";

function App() {

    const [error, setError] = useState(false);

    const [value, setValue] = useState("");

    return (

        <div className="App">
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Button color="primary" onClick={() => setError(!error)}>Hello</Button>

            <Switch onClick={() => setError(!error)} defaultSelected aria-label="Automatic updates"/>

            <Textarea
                isInvalid={error}
                label="Description"
                placeholder="Enter your description"
                className="max-w-xl"
                errorMessage="The description should be at least 255 characters long."
                variant="bordered"
            />


            <Textarea
                isInvalid={true}
                variant="bordered"
                label="Description"
                placeholder="Enter your description"
                defaultValue="NextUI is a React UI library with..."
                errorMessage="The description should be at least 255 characters long."
                className="max-w-xs"
            />

            <div className="w-full flex flex-col gap-2 max-w-[240px]">
                <Textarea
                    variant="underlined"
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    value={value}
                    onValueChange={setValue}
                />
                <p className="text-default-500 text-small">Textarea value: {value}</p>
            </div>

            <div className="flex justify-center">
                <Image
                    isBlurred
                    width={300}
                    alt="NextUI Fruit Image with Zoom"
                    src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"/>
            </div>
        </div>


    );
}

export default App;
