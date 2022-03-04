public class Solution {
    public Money calculatePay(Employee e)
    throws InvalidEmployeeType {
        switch (e.type) {
         case COMMISSION:
            return calculateCommissionPay(e);
        case HOURLY:
            return calculateHourlyPay(e);
        case SALARIED:
            return calculateSalariedPay(e);
        default:
            throw new InvalidEmployeeType(e.type); 

        }
    }
}

public abstract class Employee {
  public abstract boolean isPayDay();
    public abstract Money calculatePay();
    public abstract void deliverPay(Money pay);
}

public interface EmployeeFactory {
  public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType;
}


public class EmployeeFactoryImpl implements EmployeeFactory {
  public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType {
    switch (r.type) {
      case COMMISSION:
        return new CommissionEmployee(r);
      case HOURLY:
        return new HourlyEmployee(r);
      case SALARIED:
        return new SalariedEmployee(r);
      default:
        throw new InvalidEmployeeType(r.type);
    }
  }
}


class cosas{

    public void name() {
        new EmployeeFactoryImpl().makeEmployee(new EmployeeRecord());
    }
}