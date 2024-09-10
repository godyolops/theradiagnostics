import React from "react";

interface TestimonySectionProps {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}

const TestimonySection: React.FC<TestimonySectionProps> = ({
  name,
  role,
  imageUrl,
  description,
}: TestimonySectionProps) => {
  return (
    <div className="mb-6 mt-[90px] pt-10 pr-20 pb-5 pl-10 bg-gray-50 items-start w-[500px] border border-gray-200 rounded-lg shadow-xs hover:shadow-md">
      <img src={imageUrl} alt="" className="mb-6 -mt-[90px]" />
      <div className="font-semibold text-lg mb-2">{name}</div>
      <div className="mb-2 text-sm font-normal text-gray-500">{role}</div>
      <div className="mb-4 pt-4 font-normal text-[15px] text-gray-500">
        {description}
      </div>
    </div>
  );
};

export default TestimonySection;
