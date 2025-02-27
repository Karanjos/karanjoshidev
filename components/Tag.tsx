type TagProps = {
  label: string;
};

const Tag = ({ label }: TagProps) => {
  return (
    <div className="bg-gray-300 dark:bg-gray-700 text-gray-950 dark:text-gray-100 px-2 py-1 rounded-full transition-transform duration-300 transform hover:scale-110 cursor-default">
      <h2 className="text-lg font-semibold mx-4 my-1 uppercase">{label}</h2>
    </div>
  );
};
export default Tag;
