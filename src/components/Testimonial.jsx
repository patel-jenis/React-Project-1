import TestimonialCard from "./TestimonialCard"

const Testimonial = () => {
    let cardElement = [
        {
            name: "mr. John doe",
            course: "designer",
            profileUrl: "/images/profile-1.png",
        },
        {
            name: "mr. onsequat",
            course: "developer",
            profileUrl: "/images/profile-2.png",
        },
        {
            name: "mr. John doe",
            course: "designer",
            profileUrl: "/images/profile-3.png",
        },
    ]

    return (
        <section className="mt-5 testimonial">
            <div className="container">
                <h2 className="text-center mb-5 sec-heading">Testimonial</h2>
                <div className="row gy-4">
                    {
                        cardElement.map((data) => {
                            return <TestimonialCard name={data.name} course={data.course} profileUrl={data.profileUrl} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonial