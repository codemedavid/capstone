import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { AiFillEye } from "react-icons/ai";

const TABLE_HEAD = ["Name", "Position", "User-Type", ""];

const TABLE_ROWS = [
    {
        name: "John Michael",
        job: "Manager",
        type: "Admin",
    },
    {
        name: "Alexa Liras",
        job: "Developer",
        type: "Users",
    },
    {
        name: "Laurent Perrier",
        job: "Executive",
        type: "Users",
    },
    {
        name: "Michael Levi",
        job: "Developer",
        type: "Admin",
    },
    {
        name: "Richard Gran",
        job: "Employer",
        type: "Admin",
    },
];

function UsersTable() {
    return (
        <div className="max-w-[1440px] lg:mx-auto mx-4 py-8">
            <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-t text-center border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ name, job, type }, index) => (
                            <tr
                                key={name}
                                className="even:bg-blue-gray-50/50 text-center"
                            >
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {job}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {type}
                                    </Typography>
                                </td>
                                <td className="">
                                    <div className="flex items-center space-x-2 justify-center">
                                        <AiFillEye className=" cursor-pointer text-xl text-blue-600 hover:scale-125 duration-500" />
                                        <Typography
                                            as="a"
                                            href="#"
                                            variant="small"
                                            color="red"
                                            className="font-medium hover:scale-125 duration-500"
                                        >
                                            Delete
                                        </Typography>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}

export default UsersTable;