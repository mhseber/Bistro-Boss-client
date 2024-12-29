
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className='text-orange-300 mb-2'>{subHeading}</p>
            <h3 className='text-4xl font-extrabold uppercase border-y-4 py-4 text-white'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;