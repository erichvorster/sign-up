const Spinner = ({ loading }: { loading: boolean | undefined }) => {
  return (
    loading && (
      <div
        className="w-6 h-6 rounded-full animate-spin
            border-4 border-solid border-neutral-700 border-t-transparent ml-2"
      ></div>
    )
  );
};

export default Spinner;
