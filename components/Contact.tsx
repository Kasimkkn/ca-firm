import React from 'react';

export default function Contact() {
    return (
        <section id='contact' className="bg-[#171614] text-[#f7f3f0] min-h-screen flex max-md:pt-10 md:items-center justify-center p-4">
            <div className="max-w-7xl w-full mx-auto">
                <div className="flex flex-col mb-4 md:mb-16">
                    <h1 className="text-6xl md:text-[100px] lg:text-[170px] font-light">CONTACT</h1>
                    <span className="w-full h-[1px] md:h-[2px] bg-gray-300"></span>
                </div>
                <div className="flex max-md:flex-col justify-between max-w-7xl w-full mx-auto">
                    <div className="flex flex-col md:items-center">
                        <div className="md:w-64 w-32 md:h-64 h-32 bg-gray-300 rounded-full flex items-center justify-center text-black text-center">
                            <span className="text-lg md:text-2xl font-bold">SAY HELLO</span>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col space-x-24 max-md:mt-6">
                        <div className='max-md:w-full'>
                            <h2 className="text-xl md:text-2xl lg:text-4xl mb-6">SPRUCE GROVE</h2>
                            <p className="text-lg md:text-xl lg:text-2xl mb-4">
                                202, 215 McLeod Avenue Box 3497
                                <br />
                                Spruce Grove, AB T7X 3A7
                            </p>
                            <p className="text-lg md:text-xl lg:text-2xl mb-4">(780) 962-3365</p>
                            <div className="mt-6 w-full">
                                <a
                                    href="mailto:hello@sealco.ca"
                                    className="text-xl md:text-2xl lg:text-3xl hover:underline"
                                >
                                    HELLO@SEALCO.CA
                                </a>
                            </div>
                        </div>
                        <div className='max-md:w-full max-md:mt-5'>
                            <h2 className="text-xl md:text-2xl lg:text-4xl mb-6">LEDUC</h2>
                            <p className="text-lg md:text-xl lg:text-2xl mb-4">
                                100, 5306-50 ST ,
                                Leduc, AB T9E 6Z6
                            </p>
                            <p className="text-lg md:text-xl lg:text-2xl mb-4">(780) 986-8946</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}