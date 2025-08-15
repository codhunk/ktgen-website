import React from 'react'
import SegmentSlider from '../slider/segmentSlider'

const AnimatedSlider = () => {
    return (
        <section className='flavor-section'>
            <div className="h-full flex lg:flex-row flex-col items-center  relative">
                <div className="lg:w-[35%] flex-none h-10 sm:h-36 lg:h-full md:mt-20 xl:mt-0 ">
                </div>
                <div>
                    <SegmentSlider />
                </div>
            </div>
        </section>
    )
}

export default AnimatedSlider