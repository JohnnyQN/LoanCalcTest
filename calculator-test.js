describe("calculateMonthlyPayment", function() {
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 100000,
      years: 15,
      rate: 5.5
    };
    expect(calculateMonthlyPayment(values)).toEqual("817.08");
  });



  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 2000,
      years: 2,
      rate: 7.5
    };
    expect(calculateMonthlyPayment(values)).toMatch(/^\d+\.\d{2}$/);
  });


});
