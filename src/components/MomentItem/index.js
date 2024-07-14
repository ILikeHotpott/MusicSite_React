import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Divider} from "@nextui-org/react";
import MockImage from "@/components/ResponsiveSideBar/MockImage";
import {Icon} from "@iconify/react";
import {cn} from "@/components/TrackResult/cn";

export default function MomentItem() {
    const [isFollowed, setIsFollowed] = React.useState(false);

    const [isLiked, setIsLiked] = React.useState(false);

    return (
        <Card className="max-w-full">
            <CardHeader className="justify-between flex-wrap">
                <div className="flex gap-5 items-center">
                    <Avatar isBordered radius="full" size="lg" src="https://nextui.org/avatars/avatar-1.png"/>
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">Zoey Lang</h4>
                        <h5 className="text-small tracking-tight text-default-400">@zoeylang</h5>
                    </div>
                </div>
                <Button
                    className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={isFollowed ? "bordered" : "solid"}
                    onPress={() => setIsFollowed(!isFollowed)}
                >
                    {isFollowed ? "Unfollow" : "Follow"}
                </Button>
            </CardHeader>
            <CardBody className="px-3 text-lg text-black">
                <p>
                    Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
                </p>
                <span className="pt-2">
                    #FrontendWithZoey
                </span>
                <div className="grid grid-cols-3 gap-1">
                    <MockImage/>
                    <MockImage/>
                    <MockImage/>
                </div>

            </CardBody>
            <Divider/>
            <CardFooter className=" flex items-center justify-center p-0">
                <div className="w-5/6 flex justify-between">
                    <Button
                        isIconOnly
                        className="bg-background/60 backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
                        radius="full"
                        onPress={() => setIsLiked(!isLiked)}
                    >
                        <Icon
                            className={cn("text-default-900/50", {
                                "text-danger-500": isLiked,
                            })}
                            icon="solar:heart-bold"
                            width={32}
                        />
                    </Button>

                    <Button
                        isIconOnly
                        className="bg-background/60 backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
                        variant="flat"
                    >
                        <Icon
                            className={cn("text-default-900/50")}
                            icon="iconamoon:comment-dots"
                            width={30}
                        />
                    </Button>

                    <Button
                        isIconOnly
                        className="bg-background/60 backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
                        variant="flat"
                    >
                        <Icon
                            className={cn("text-default-900/50")}
                            icon="ic:round-share"
                            width={30}
                        />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
