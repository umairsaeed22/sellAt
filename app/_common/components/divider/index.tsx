import { MdSlowMotionVideo } from "react-icons/md";

const CenteredButtons = () => {
    return (
      <div className="flex justify-center items-center w-full mt-5 md:mt-10">
        <div className="flex flex-row space-x-4">
        <button className="flex items-center bg-white border border-purple-500 text-purple-500 px-4 py-2 rounded-md">
          <MdSlowMotionVideo className="mr-2" />
          See How It Works
        </button>
          <button className="bg-buttonColor-500 text-white px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    );
  };
  
  export default CenteredButtons;