import Tag from "./Tag";

type ContainerProps = {
  tag: string;
  children: React.ReactNode;
  id: string;
  classNames: string;
};

const Container = ({ tag, children, id, classNames }: ContainerProps) => {
  return (
    <section
      id={id}
      className={`${classNames} w-full h-full py-20`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="self-center">
          <Tag label={tag} />
        </div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 h-full flex lg:flex-row flex-col justify-between items-center gap-20 lg:gap-10 py-20">
          {children}
        </div>
      </div>
    </section>
  );
};
export default Container;
