type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-lg bg-gray shadow-md dark:bg-gray-800 bg-gray-50 dark:shadow-gray-900 shadow-gray-300 text-gray-900 dark:text-gray-100 px-8 py-6 w-full">
      {children}
    </div>
  );
};
export default Card;
