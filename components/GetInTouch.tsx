import Container from "./Container";

const GetInTouch = () => {
  return (
    <Container
      tag="Get In Touch"
      id="contact"
      classNames="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <div className="flex flex-col gap-4">
        <p>
          I&apos;m always open to new opportunities and collaborations. If you
          have any questions or just want to say hi, feel free to reach out to
          me.
        </p>
        <p>
          You can contact me through my email at{" "}
          <a
            href="mailto:karanJoshi0901@gmail.com"
            className="text-blue-500 dark:text-blue-400"
          >
            karanJoshi0901@gmail.com
          </a>{" "}
          or through my social media handles.
        </p>
        <p>
          I&apos;m also available for freelance work, so if you have a project
          in mind, let&apos;s talk!
        </p>
        <p></p>
      </div>
    </Container>
  );
};
export default GetInTouch;
