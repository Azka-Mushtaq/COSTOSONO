const HomeHeadings = ({ heading, para }) => {
  return (
    <>
      <div className="py-3">
        {heading && (
          <h1 className="font-bold text-4xl text-center ">{heading}</h1>
        )}
        {para && <p className="text-center pt-4">{para}</p>}
      </div>
    </>
  );
};

export default HomeHeadings;
