import Image from 'next/image';

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center gap-10">
        <p className='text-headerColor-500 text-3xl font-medium'>
        Discover services that outshine all other <span className='text-buttonColor-500 text-3xl font-medium'>Freelancing Platforms</span>
        </p>
        <div className="flex flex-row justify-center gap-10">
            {/* Left Child */}
            <div className="relative w-2/4">
                <Image
                src="/assets/Small Project.png"
                alt="Small Project"
                layout="responsive"
                width={200}
                height={200}
                className="object-cover"
                />
                
            </div>

            {/* Right Child */}
            <div className="relative w-2/4">
                <Image
                src="/assets/Compet.png"
                alt="Competitive Projects"
                layout="responsive"
                width={200}
                height={200}
                className="object-cover"
                />
                
            </div>
      </div>
    </div>
  );
};

export default Projects;

