import { LocalAuthentication } from '@/data/LocalAuthentication';

describe('LocalAuthentication', () => {
  test('should call save storage success', async () => {
    const auth = new LocalAuthentication();
    const { success } = await auth.signIn({
      username: 'lucasjcs',
      password: 'abc123',
    });

    expect(success).toBe(true);
  });
});
