SELECT id,
    name,
    position(',' IN characteristics) AS comma
FROM monsters
ORDER BY comma