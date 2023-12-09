import Navbar from "../Shared/Navbar";

const Contact = () => {
    return (
        <div className="px-4 md:px-6 lg:px-8">
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto py-16">
                <h1 className="text-3xl md:text-4xl font-bold text-center py-2 pb-16"><span className="text-rose-500">Feel Free</span> To Reach Us</h1>
                <form>
                    <div className="w-full lg:w-1/2 mx-auto">
                        {/* Name */}
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required/>
                        </div>

                        {/* Email */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email </span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        {/* message */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Message </span>
                        </label>
                        <textarea type="text" name="message" placeholder="Write your message here..." className="input input-bordered py-3 h-48" required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral bg-rose-500 border-none text-white">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;