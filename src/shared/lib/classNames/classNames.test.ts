import { classNames } from './classNames';

describe('classNames', () => {
  test('should return adding cls params', () => {
    expect(classNames('flex')).toBe('flex');
  });

  test('should return adding cls and optCls params with className key', () => {
    expect(classNames('flex justify-center', {
      'items-center': true,
      className: 'column'
    })).toBe('flex justify-center items-center column');
  });

  test('should return adding cls and optCls params without className key', () => {
    expect(classNames('flex justify-center', {
      'items-center': true,
      column: false,
      className: undefined
    })).toBe('flex justify-center items-center');
  });
});
