import React from 'react'
import { CircleCheck } from 'lucide-react'

const features = [
    {
        title: 'Reduce Time-to-Hire by 60%',
        description:
            'Automate candidate screening and streamline the entire recruitment process',
    },
    {
        title: 'Improve Employee Retention',
        description:
            'Track performance, identify issues early, and support employee growth',
    },
    {
        title: 'Save 10+ Hours Weekly',
        description:
            'Eliminate manual data entry and repetitive administrative tasks',
    },
    {
        title: 'Data-Driven Decisions',
        description:
            'Access real-time analytics and insights to optimize your workforce',
    },
]

const DescriptionCard = () => {
    return (
        <section className="md:w-1/2  py-16 ">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-logo-black dark:text-white">
                Why Choose WorkFlow?
            </h1>

            {/* Features */}
            <div className="mt-14 flex flex-col gap-2">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 hover:bg-blue-100 dark:hover:bg-linear-to-r dark:hover:from-blue-500 dark:hover:to-pink-500 py-4 px-2 rounded-xl"
                    >
                        {/* Icon */}
                        <div className="mt-1">
                            <CircleCheck
                                size={22}
                                className="text-orange-500"
                                strokeWidth={2}
                            />
                        </div>

                        {/* Content */}
                        <div className='dark:hover:text-black'>
                            <h2 className="text-xl font-bold text-black dark:text-white ">
                                {item.title}
                            </h2>

                            <p className="mt-2 text-md leading-8 text-gray-500 md:w-xl w-full">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DescriptionCard