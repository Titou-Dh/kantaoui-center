const Why = () => {
    return (
        <div className="dark:bg-primaryBg">
            <div className="text-center py-12 ">
                <h1 className="text-4xl capitalize font-bold">
                    Why you should <span className="text-primary">stay here</span>
                </h1>
                <p className="text-gray-400 mt-5">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
                    amet sint. Velit officia consequat.
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around md:pl-40 pl-2 py-8  ">
                <div className="md:w-1/2 w-full gap-8 flex flex-col">
                    <div>
                        <div className="bg-primary text-white w-10 py-2 text-center rounded-full">1</div>
                        <h2 className="text-xl text-black my-2 dark:text-white">Low price with Best Quality</h2>
                        <p className="text-gray-500">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
                            amet sint. Velit officia consequat.
                        </p>
                    </div>
                    <div>
                        <div className="bg-primary text-white w-10 py-2 text-center rounded-full">2</div>
                        <h2 className="text-xl dark:text-white text-black my-2">Provide the best choice of Room.</h2>
                        <p className="text-gray-500">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
                            amet sint. Velit officia consequat.
                        </p>
                    </div>
                    <div>
                        <div className="bg-primary text-white w-10 py-2 text-center rounded-full">3</div>
                        <h2 className="text-xl dark:text-white text-black my-2">Restaurant Service</h2>
                        <p className="text-gray-500">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />
                            amet sint. Velit officia consequat.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 w-full">
                    <img src="/why.png" alt="why1" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default Why;
