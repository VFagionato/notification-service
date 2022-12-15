import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('New anomaly detected');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less then 5 character', () => {
    expect(() => new Content('a'.repeat(4))).toThrow();
  });

  it('should not be able to create a notification content with more then 240 character', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
