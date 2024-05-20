import Link from 'next/link'
import React from 'react'

function Section() {
    return (
        <section data-aos="fade-up" data-aos-duration="1000" className='relative text-white py-2 px-1 md:p-5'>
            <p data-aos="fade-up" data-aos-duration="1000" className='text-base block font-semibold px-2  md:hidden mb-7 text-center'>
            EGYPTIAN GRAPHIC DESIGNER 10 YEARS IN THE FIELD OF ADVERTISING, BRANDING AND SOCIAL MEDIA DESIGN, BOOK COVERS OF SOME NOVELS, COVERS, POSTERS, AND OTHER BUSINESS
            </p>
           
            

            <div data-aos="fade-up" data-aos-duration="1000" className="container mx-auto p-2 mt-7 md:p-5">
                <svg className='w-[120px] sm:w-[150px]  lg:w-[200px] md:my-5 xl:my-0' viewBox="0 0 322 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="104.5" cy="101.5" r="73.5" fill="url(#paint0_radial_122_389)" />
                    <circle cx="81.5" cy="81.5" r="80.5" stroke="#D69D66" strokeWidth="2" />
                    <path d="M106.32 131.56C102.587 131.56 99.2267 130.92 96.24 129.64C93.2533 128.307 90.9067 126.44 89.2 124.04C87.4933 121.64 86.64 118.84 86.64 115.64H96.4C96.6133 118.04 97.5467 120.013 99.2 121.56C100.907 123.107 103.28 123.88 106.32 123.88C109.467 123.88 111.92 123.133 113.68 121.64C115.44 120.093 116.32 118.12 116.32 115.72C116.32 113.853 115.76 112.333 114.64 111.16C113.573 109.987 112.213 109.08 110.56 108.44C108.96 107.8 106.72 107.107 103.84 106.36C100.213 105.4 97.2533 104.44 94.96 103.48C92.72 102.467 90.8 100.92 89.2 98.84C87.6 96.76 86.8 93.9867 86.8 90.52C86.8 87.32 87.6 84.52 89.2 82.12C90.8 79.72 93.04 77.88 95.92 76.6C98.8 75.32 102.133 74.68 105.92 74.68C111.307 74.68 115.707 76.04 119.12 78.76C122.587 81.4267 124.507 85.1067 124.88 89.8H114.8C114.64 87.7733 113.68 86.04 111.92 84.6C110.16 83.16 107.84 82.44 104.96 82.44C102.347 82.44 100.213 83.1067 98.56 84.44C96.9067 85.7733 96.08 87.6933 96.08 90.2C96.08 91.9067 96.5867 93.32 97.6 94.44C98.6667 95.5067 100 96.36 101.6 97C103.2 97.64 105.387 98.3333 108.16 99.08C111.84 100.093 114.827 101.107 117.12 102.12C119.467 103.133 121.44 104.707 123.04 106.84C124.693 108.92 125.52 111.72 125.52 115.24C125.52 118.067 124.747 120.733 123.2 123.24C121.707 125.747 119.493 127.773 116.56 129.32C113.68 130.813 110.267 131.56 106.32 131.56ZM166.921 131L145.401 106.12V131H136.281V75.4H145.401V100.76L167.001 75.4H178.441L154.281 103.24L178.841 131H166.921ZM196.026 75.4V131H186.906V75.4H196.026ZM217.12 123.64H235.92V131H208V75.4H217.12V123.64ZM252.667 123.64H271.467V131H243.547V75.4H252.667V123.64ZM297.414 131.56C293.68 131.56 290.32 130.92 287.334 129.64C284.347 128.307 282 126.44 280.294 124.04C278.587 121.64 277.734 118.84 277.734 115.64H287.494C287.707 118.04 288.64 120.013 290.294 121.56C292 123.107 294.374 123.88 297.414 123.88C300.56 123.88 303.014 123.133 304.774 121.64C306.534 120.093 307.414 118.12 307.414 115.72C307.414 113.853 306.854 112.333 305.734 111.16C304.667 109.987 303.307 109.08 301.654 108.44C300.054 107.8 297.814 107.107 294.934 106.36C291.307 105.4 288.347 104.44 286.054 103.48C283.814 102.467 281.894 100.92 280.294 98.84C278.694 96.76 277.894 93.9867 277.894 90.52C277.894 87.32 278.694 84.52 280.294 82.12C281.894 79.72 284.134 77.88 287.014 76.6C289.894 75.32 293.227 74.68 297.014 74.68C302.4 74.68 306.8 76.04 310.214 78.76C313.68 81.4267 315.6 85.1067 315.974 89.8H305.894C305.734 87.7733 304.774 86.04 303.014 84.6C301.254 83.16 298.934 82.44 296.054 82.44C293.44 82.44 291.307 83.1067 289.654 84.44C288 85.7733 287.174 87.6933 287.174 90.2C287.174 91.9067 287.68 93.32 288.694 94.44C289.76 95.5067 291.094 96.36 292.694 97C294.294 97.64 296.48 98.3333 299.254 99.08C302.934 100.093 305.92 101.107 308.214 102.12C310.56 103.133 312.534 104.707 314.134 106.84C315.787 108.92 316.614 111.72 316.614 115.24C316.614 118.067 315.84 120.733 314.294 123.24C312.8 125.747 310.587 127.773 307.654 129.32C304.774 130.813 301.36 131.56 297.414 131.56Z" fill="white" />
                    <defs>
                        <radialGradient id="paint0_radial_122_389" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(104.5 101.5) rotate(90) scale(73.5)">
                            <stop stopColor="#D69D66" />
                            <stop offset="1" stopColor="#D69D66" stopOpacity="0.66" />
                        </radialGradient>
                    </defs>
                </svg>


                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className='md:ms-5'>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-10'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Proficiency in Design Software  </h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'> Mastery of design tools such as Adobe Creative Suite (Photoshop, Illustrator, InDesign), Sketch, or other industry-standard software</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-16'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Creative Thinking</h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'>Ability to generate innovative ideas and concepts, as well as translate them into visually appealing designs.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-16'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Typography</h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'>Understanding of typography principles and the ability to effectively use fonts to enhance design aesthetics and readability.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-16'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Color Theory</h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'>Knowledge of color psychology and the ability to create harmonious color palettes that evoke desired emotions or convey specific messages.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-16'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Layout and Composition</h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'>Strong grasp of layout principles to organize visual elements in a balanced and compelling way.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-16'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Attention to Detail</h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'>Ability to pay close attention to details such as spacing, alignment, and consistency to ensure high-quality design output.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-16'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Communication Skills</h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'> Effective communication with clients, team members, and stakeholders to understand project requirements and present design concepts.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-16'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Time Management</h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'>Capacity to manage multiple projects simultaneously and meet deadlines while maintaining quality standards.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-16'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Problem-Solving</h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'> Aptitude for identifying design challenges and developing creative solutions to address them effectively.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-16'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Understanding of Branding</h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'>Knowledge of branding principles and the ability to create designs that align with brand identity and messaging.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-16'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Digital Skills</h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'> Familiarity with web design principles, UI/UX concepts, and responsive design techniques for digital platforms.</p>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className='mt-16'>
                            <div className='flex justify-start items-center my-7'>
                                <div className='bg-grayColor w-3 h-3 rounded-full'>
                                </div>
                                <div className='flex items-center'>
                                    <h1 className='text-base lg:text-3xl ms-2 font-light md:font-semibold'>Print Production Knowledg</h1>
                                </div>
                            </div>
                            <p className='text-sm md:text-xl font-normal'>Understanding of print processes, including le preparation, color management, and prepress requirements, for producing high-quality print materials.</p>
                        </div>
                    </div>
                 
                </div>
            </div>


            <div className='absolute right-0 hidden sm:block sm:top-72 xl:top-96'>
                <svg className='w-[50px] lg:w-[100px] ms-auto' height="50" viewBox="0 0 170 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M325 47.1727C300.46 16.1275 232.977 -29.8874 159.359 34.4146C85.7408 98.7167 23.7788 56.1035 2 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>

                <svg className='w-[70px] lg:w-[150px]' height="50" viewBox="0 0 325 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 47.1727C26.5396 16.1275 94.0234 -29.8874 167.641 34.4146C241.259 98.7167 303.221 56.1035 325 26.7591" stroke="white" strokeWidth="3.41894" />
                </svg>
            </div>

        </section>
    )
}

export default Section
