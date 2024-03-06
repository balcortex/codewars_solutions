SELECT capital
FROM countries
WHERE continent IN ('Africa', 'Afrika')
    AND LEFT(country, 1) = 'E'
ORDER BY capital ASC
LIMIT 3