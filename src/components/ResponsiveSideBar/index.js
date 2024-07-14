"use client";

import React from "react";
import {Button, ScrollShadow, Spacer, Tooltip} from "@nextui-org/react";
import MomentItem from "@/components/MomentItem";
import {Icon} from "@iconify/react";
import {useMediaQuery} from "usehooks-ts";
import {sectionItemsWithTeams} from "./sidebar-items";
import {cn} from "./cn";
import Sidebar from "./sidebar";

/**
 *  This example requires installing the `usehooks-ts` package:
 * `npm install usehooks-ts`
 *
 * import {useMediaQuery} from "usehooks-ts";
 *
 * 💡 TIP: You can use the usePathname hook from Next.js App Router to get the current pathname
 * and use it as the active key for the Sidebar component.
 *
 * ```tsx
 * import {usePathname} from "next/navigation";
 *
 * const pathname = usePathname();
 * const currentPath = pathname.split("/")?.[1]
 *
 * <Sidebar defaultSelectedKey="home" selectedKeys={[currentPath]} />
 * ```
 */
export default function ResponsiveSideBar() {
    const isCompact = useMediaQuery("(max-width: 768px)");

    return (
        <div className="flex h-screen w-full">
            <div
                className={cn(
                    "fixed top-18 left-0 h-full flex flex-col !border-r-small border-divider p-6 transition-width",
                    {
                        "w-16 items-center px-2 py-6": isCompact,
                        "w-72": !isCompact,
                    }
                )}
            >
                <div
                    className={cn(
                        "flex items-center gap-3 px-3",
                        {
                            "justify-center gap-0": isCompact,
                        }
                    )}
                >
                    <span
                        className={cn("text-small font-bold uppercase opacity-100", {
                            "w-0 opacity-0": isCompact,
                        })}
                    >
                    </span>
                </div>
                <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
                    <Sidebar defaultSelectedKey="home" isCompact={isCompact} items={sectionItemsWithTeams}/>
                </ScrollShadow>
                <Spacer y={2}/>
                <div
                    className={cn("mt-auto flex flex-col", {
                        "items-center": isCompact,
                    })}
                >
                    <Tooltip content="Help & Feedback" isDisabled={!isCompact} placement="right">
                        <Button
                            fullWidth
                            className={cn(
                                "justify-start truncate text-default-500 data-[hover=true]:text-foreground",
                                {
                                    "justify-center": isCompact,
                                },
                            )}
                            isIconOnly={isCompact}
                            startContent={
                                isCompact ? null : (
                                    <Icon
                                        className="flex-none text-default-500"
                                        icon="solar:info-circle-line-duotone"
                                        width={24}
                                    />
                                )
                            }
                            variant="light"
                        >
                            {isCompact ? (
                                <Icon
                                    className="text-default-500"
                                    icon="solar:info-circle-line-duotone"
                                    width={24}
                                />
                            ) : (
                                "Help & Information"
                            )}
                        </Button>
                    </Tooltip>
                </div>
            </div>
            <div className="flex-1 flex-col ml-72 p-4 overflow-auto" style={{marginLeft: isCompact ? '4rem' : '18rem'}}>
                <header
                    className="flex items-center gap-3 rounded-medium border-divider p-0 top-0 bg-white z-10 justify-center">
                    <Button radius="full" size="lg" className="bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600 text-white shadow-lg animate-gradient-flow bg-[length:200%_200%]">
                        Click here to share your favourite music!
                        <Icon
                            className={cn("text-default-900/50")}
                            icon="foundation:music"
                            width={32}
                        />
                    </Button>
                </header>
                <main className="mt-4 h-full w-full">
                    <div className="flex w-full flex-col gap-4 rounded-medium border-divider overflow-y-auto">
                        <MomentItem/>
                        <MomentItem/>
                        <MomentItem/>
                        <MomentItem/>
                        <MomentItem/>
                        <MomentItem/>
                    </div>
                </main>
            </div>
        </div>
    );
}
