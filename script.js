function calculateLoan() {
  var loanAmount = parseFloat(document.getElementById("loan-amount").value);
  var annualInterestRate = parseFloat(document.getElementById("interest-rate").value);
  var loanTerm = parseInt(document.getElementById("loan-term").value);

  var monthlyPaymentElement = document.getElementById("monthly-payment");
  var totalInterestElement = document.getElementById("total-interest");
  var resultElement = document.getElementById("result");

  if (isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTerm)) {
    alert("Please enter valid input values.");
    return;
  }

  var monthlyInterestRate = annualInterestRate / 12 / 100;
  var loanTermMonths = loanTerm * 12;

  var monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTermMonths));
  var totalInterest = (monthlyPayment * loanTermMonths) - loanAmount;

  monthlyPaymentElement.textContent = "Rs:" + monthlyPayment.toFixed(2);
  totalInterestElement.textContent = "Rs:" + totalInterest.toFixed(2);

  resultElement.style.display = "block";
}
