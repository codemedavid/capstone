import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";


function JobCard(props) {
    return (
        <div>
            <Card className="flex-row w-full max-w-full mb-4 shadow-xl h-80 ">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="w-2/5 m-0 rounded-r-none shrink-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="card-image"
                        className="object-cover w-full h-full duration-1000 hover:scale-125"
                    />
                </CardHeader>
                <CardBody className="flex flex-col">
                    <Typography
                        variant="h5"
                        color="blue"
                        className="mb-2 uppercase t "
                    >
                        {props.title}
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {props.employer}
                    </Typography>
                    <Typography color="gray" className="mb-4">
                        Job Description
                    </Typography>
                    <Typography
                        color="gray"
                        className="flex-grow mb-4 overflow-hidden max-h-[100px]"
                    >
                        {props.jdescription}
                    </Typography>
                    <div className="flex justify-between">
                        <a
                            href={`/job-overview/${props.id}`}
                            className="flex text-blue-600 duration-500 hover:scale-125"
                        >
                            <button>More Info</button>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

                        </a>
                        <Typography className="text-emerald-500">
                            {props.vacancy} Vacancies
                        </Typography>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}

export default JobCard;
