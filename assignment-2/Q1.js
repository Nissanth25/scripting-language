class BankAccount
  def initialize(b)
    @bal = b
  end

  def add_balance(a)
    if a > 0
      @bal += a
    else
      puts "Invalid deposit amount"
    end
  end

  def withdraw(a)
    if a > 0 && a <= @bal
      @bal -= a
    else
      puts "Invalid withdraw amount"
    end
  end

  def check_balance
    @bal
  end
end
