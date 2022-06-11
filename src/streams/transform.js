import { Transform, pipeline } from 'stream';

export const transform = async () => {

        const readable = process.stdin;
        const writable = process.stdout;

        const transform = new Transform({
          transform(chunk, enc, cb) {
            const chunkStringified = chunk.toString().trim();
            const chunkReversed = chunkStringified.split('').reverse().join('');

            this.push(chunkReversed + '\n');
            cb();
          },
        });

        pipeline(readable, transform, writable, (err) => {
          console.log(`Error: ${err}`);
        });
};

transform();

