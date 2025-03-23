// spec/calculateSimpleInterestSpec.js
describe("calculateSimpleInterest", () => {
    it("should return the correct simple interest", () => {
      const principal = 1000;
      const rate = 5;
      const time = 1;
      const expectedInterest = 50;
  
      const calculateSimpleInterest = (principal, rate, time) => {
        return (principal * rate * time) / 100;
      };
  
      const interest = calculateSimpleInterest(principal, rate, time);
  
      expect(interest).toBe(expectedInterest);
    });
  });
  
  // spec/calculateTotalPayableAmountSpec.js
  describe("calculateTotalPayableAmount", () => {
    it("should return the correct total payable amount", () => {
      const principal = 1000;
      const interestAmount = 50;
      const expectedTotal = 1050;
  
      const calculateTotalPayableAmount = (principal, interestAmount) => {
        return principal + interestAmount;
      };
  
      const totalPayableAmount = calculateTotalPayableAmount(principal, interestAmount);
  
      expect(totalPayableAmount).toBe(expectedTotal);
    });
  });
  