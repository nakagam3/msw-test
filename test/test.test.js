describe('MSW test', () => {
    it('test', async () => {
      expect(1).toBe(1);
    });

    it('test', async () => {
      fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
          username: "kid",
        }),
      })
      .then((res) => {
        expect(res.json.id).toBe("f79e82e8-c34a-4dc7-a49e-9fadc0979fda")
      });
    });
})
