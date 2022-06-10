export const parseEnv = () => {
    const parsedVariables = Object.entries(process.env).reduce((variablesArr, [key, value]) => {
        if (key.startsWith('RSS_')) variablesArr.push(`${key} = ${value}`);
        return variablesArr;
    }, []);

    console.log(parsedVariables.join(' '));

};

parseEnv();