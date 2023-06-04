const classNameExceptions = ['className'];

export const classNames = (
  cls: string,
  optCls?: Record<string, string | boolean | undefined>
): string => {
  const arrCls = optCls &&
    Object.entries(optCls)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) =>
        classNameExceptions.includes(key) ? value : key
      );

  return arrCls ? [cls, ...arrCls].join(' ') : cls;
};
