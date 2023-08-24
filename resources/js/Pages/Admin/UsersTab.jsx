import React from "react";
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
} from "@material-tailwind/react";

function UsersTab() {
    return (
        <div className="flex items-center justify-center w-full p-8">
            <Card className="w-96 sm:w-[720px] lg:w-[840px] p-4 ">
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <Avatar
                                variant="circular"
                                alt="candice"
                                src="/img/face-1.jpg"
                            />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                Tania Andrew
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                            >
                                Software Engineer @ Material Tailwind
                            </Typography>
                        </div>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <Avatar
                                variant="circular"
                                alt="alexander"
                                src="/img/face-2.jpg"
                            />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                Alexander
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                            >
                                Backend Developer @ Material Tailwind
                            </Typography>
                        </div>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <Avatar
                                variant="circular"
                                alt="emma"
                                src="/img/face-3.jpg"
                            />
                        </ListItemPrefix>
                        <div>
                            <Typography variant="h6" color="blue-gray">
                                Emma Willever
                            </Typography>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal"
                            >
                                UI/UX Designer @ Material Tailwind
                            </Typography>
                        </div>
                    </ListItem>
                </List>
            </Card>
        </div>
    );
}

export default UsersTab;
