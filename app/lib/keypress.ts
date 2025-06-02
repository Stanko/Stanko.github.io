type Input = {
  key: string;
  callback: (key: string) => void;
};

export const listenForKeyPresses = (input: Input[]) => {
  process.stdin.setRawMode(true);
  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  const handler = (pressedKeyBuffer: string) => {
    const pressedKey = pressedKeyBuffer.toString();

    for (const { key, callback } of input) {
      if (pressedKey === key) {
        callback(pressedKey);
        return;
      }
    }

    if (pressedKey === '\u0003') {
      // Ctrl+C
      process.exit();
    }
  };

  process.stdin.on('data', handler);
  return () => process.stdin.off('data', handler); // Allow unregistering if needed
};
