import { log, paint } from '@brz/utils/log';
import chokidar, { FSWatcher } from 'chokidar';

export type WatcherOptions = {
  label: string;
  dir: string;
  endsWith: string;
  onChange: (path: string) => void;
  onDelete?: (path: string) => void;
  depth?: number;
};

export class Watcher {
  watcher: FSWatcher;

  constructor({
    dir,
    endsWith,
    onChange,
    onDelete,
    label,
    depth = 10,
  }: WatcherOptions) {
    this.watcher = chokidar.watch(dir, {
      persistent: true,
      ignoreInitial: true,
      ignored: (path, stats) =>
        Boolean(stats?.isFile() && !path.endsWith(endsWith)),
      depth,
    });

    this.watcher.on('all', async (event, path) => {
      const relativePath = path.replace(dir, '');
      const start = Date.now();

      if (onDelete) {
        if (['add', 'change'].includes(event)) {
          await onChange(path);
        } else if (event === 'unlink') {
          await onDelete(path);
        }
      } else if (['add', 'change', 'unlink'].includes(event)) {
        await onChange(path);
      }

      log.info(
        paint.blue(`watcher ${label}:`),
        paint.yellow(event),
        relativePath,
        `[${Date.now() - start}ms]`
      );
    });
  }
}
