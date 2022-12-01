describe('MSW test', () => {
    it('test', async () => {
      expect(1).toBe(1);
    });

    it('test', async () => {
      fetch('/pets', {
        method: 'GET',
      })
      .then((res) => {
        expect(res.json[0].name).toBe("pes")
      });
    });
})
