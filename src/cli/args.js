export const parseArgs = () => {
  const agrsArr = process.argv.slice(2);
  // console.log(agrsArr);
  const parsedArgs = agrsArr.reduce((resultArr, arg, index, arr) => {
    const nextArg = arr[index + 1];

    if (nextArg && arg.startsWith('--')) {
        const key = arg.slice(2);
        const finalArg = `${key} is ${nextArg}`;
        resultArr.push(finalArg);
    }

    return resultArr;
  }, []);

  console.log(parsedArgs.join(', '));

};

parseArgs();
