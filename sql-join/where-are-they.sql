select *
from "addresses"
join "cities" using ("cityId")
join "countries" using ("countryId")
where "addresses"."line1" != ''
and "cities"."name" != ''
and "addresses"."district" != '';
