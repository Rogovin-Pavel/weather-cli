const isDashed = (string) => string?.charAt(0) === "-";

const getArguments = (argv) => {
  const result = {};
  const [_executer, _entry, ...rest] = argv;

  rest.forEach((key, index, arr) => {
    if (isDashed(key)) {
      const value = arr[index + 1];
      const isLastElement = arr.length - 1 === index;
      const hasNext = !isDashed(value);
      const argName = key.substring(1);

      if (hasNext) result[argName] = value;
      if (isLastElement || !hasNext) result[argName] = true;
    }
  });

  return result;
};

export { getArguments };
