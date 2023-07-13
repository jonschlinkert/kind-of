import path from 'node:path';
import suite from 'benchmarked';
import write from 'write';

const stats = await suite.run({
  fixtures: 'fixtures/*.js',
  code: 'code/{kind-of,lib-*}.js'
})

write.sync(path.join(__dirname, 'stats.json'), JSON.stringify(stats, null, 2))
write.sync(path.join(__dirname, 'stats.md'), suite.render(stats));
