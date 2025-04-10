select count("cities"."name") as "numberOfCities", "countries"."name"
from "cities"
join "countries" using ("countryId")
group by "countries"."name";
