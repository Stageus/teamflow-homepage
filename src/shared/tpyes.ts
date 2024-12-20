type ReturnMapper<T> = {
    [K in keyof T]: T[K];
  } & {};