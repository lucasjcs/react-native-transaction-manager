import { Storage } from '@/data/Storage';

describe('LocalAuthentication', () => {
  test('should save data on AsyncStorage', async () => {
    const storage = new Storage();
    const saved = await storage.save({
      username: 'lucasjcs',
      password: 'abc123',
    });
    expect(saved.success).toBe(true);
  });
});
