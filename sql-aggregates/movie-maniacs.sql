select "firstName", "lastName", sum("payments"."amount") as "totalPaid"
from "customers"
join "payments" using ("customerId")
group by "firstName", "lastName"
order by "totalPaid" desc;
