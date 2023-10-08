import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-5">
            <h1 className="text-8xl font-thin font-mono">404</h1>
            <p className="text-lg">Oops! Page Not Found</p>
            <Link to={"/"} className="btn btn-error ">Go Home</Link>
        </div>
    );
};

export default Error;