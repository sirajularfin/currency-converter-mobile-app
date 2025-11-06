const logger = (
  error: string,
  level: 'info' | 'log' | 'warn' | 'error' = 'log',
): void => {
  const date = new Date().toTimeString().split(' ')[0];

  switch (level) {
    case 'info':
      console[level](`ℹ️  [INFO][${date}] ${error}`);
      break;

    case 'log':
      console[level](`🪵  [LOG][${date}] ${error}`);
      break;

    case 'warn':
      console[level](`⚠️  [WARN][${date}] ${error}`);
      break;

    case 'error':
      console[level](`🚨 [ERROR][${date}] ${error}`);
  }
};

export default logger;
