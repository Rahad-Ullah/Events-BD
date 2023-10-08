import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;