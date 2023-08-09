import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

function JobCard(props) {
    return (
        <div>
            <Card className="flex-row w-full max-w-full mb-4">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="w-2/5 m-0 rounded-r-none shrink-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="card-image"
                        className="object-cover w-full h-full"
                    />
                </CardHeader>
                <CardBody>
                    <Typography
                        variant="h6"
                        color="blue"
                        className="mb-4 uppercase"
                    >
                        {props.title}
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        {props.company}
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal">
                        Like so many organizations these days, Autodesk is a
                        company in transition. It was until recently a
                        traditional boxed software company selling licenses. Yet
                        its own business model disruption is only part of the
                        story
                    </Typography>
                    <a href="#" className="inline-block">
                        <Button
                            variant="text"
                            className="flex items-center gap-2"
                        >
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="w-4 h-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </a>
                </CardBody>
            </Card>
        </div>
    );
}

export default JobCard;
