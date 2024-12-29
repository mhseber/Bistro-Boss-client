import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ShouldTry = () => {
    const ShouldCard = [
        {

            name: "Hot Soup",
            description:
                "Hot soup warms the soul with rich flavors.",
            imgSrc:
                "https://i.ibb.co.com/6gQVbgy/soup-bg.jpg",
        },
        {

            name: "Tasty Pizza",
            description:
                "Tasty pizza is a delightful treat loved .",
            imgSrc:
                "https://i.ibb.co.com/fSd35yr/pizza-bg.jpg",
        },
        {

            name: "Caeser Salad",
            description:
                "Lettuce, Eggs, Parmesan Cheese.",
            imgSrc:
                "https://i.ibb.co.com/N34km0b/salad-bg.jpg",
        },
    ];
    return (
        <div>
            <SectionTitle
                heading="---Should Try---"
                subHeading="CHEF RECOMMENDS"
            ></SectionTitle>
            {/*card  */}
            <div className="dark:bg-gradient-to-r dark:from-yellow-900 dark:via-blue-900 dark:to-gray-500 py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-gray-200 via-transparent/30 to-gray-300">
                <div className="max-w-7xl mx-auto text-center ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                        {ShouldCard.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl dark:bg-gray-800"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative aspect-w-16 aspect-h-9">
                                    <img
                                        className="rounded-t-lg object-cover"
                                        src={service.imgSrc}
                                        alt={service.title}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                                    <h4 className="text-md font-semibold text-blue-600 mb-2">
                                        {service.name}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="pb-4">
                                    <button className="btn btn-outline btn-primary border-0 border-b-4 border-t-4 text-white bg-white">Add to cart</button>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShouldTry;